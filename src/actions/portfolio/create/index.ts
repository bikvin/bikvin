"use server";

import { db } from "@/db";
import { createPortfolioItemSchema } from "@/zod/portfolio";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

interface CreatePortfolioItemState {
  errors: {
    heading?: string[];
    livelink?: string[];
    fileNamesArr?: string[];
    order?: string[];
    features?: string[];
    technologies?: string[];
    roles?: string[];
    _form?: string[];
  };
}

export async function createPortfolioItem(
  formState: CreatePortfolioItemState,
  formData: FormData
): Promise<CreatePortfolioItemState> {
  try {
    const order = formData.get("order");

    const result = createPortfolioItemSchema.safeParse({
      heading: formData.get("heading"),
      livelink: formData.get("livelink"),
      features: formData.get("featuresJSON"),
      technologies: formData.get("technologiesJSON"),
      roles: formData.get("rolesJSON"),
      fileNamesArr: formData.get("fileNamesArr"),
      order: order ? Number(order) : undefined,
    });

    if (!result.success) {
      return {
        errors: result.error.flatten().fieldErrors,
      };
    }
    const featuresString = result.data?.features || "";
    const featuresArray = JSON.parse(featuresString) as string[];

    const technologiesString = result.data?.technologies || "";
    const technologiesArray = JSON.parse(technologiesString) as string[];

    const rolesString = result.data?.roles || "";
    const rolesArray = JSON.parse(rolesString) as string[];

    const featuresConnectOrCreate = featuresArray.map((feature) => ({
      where: { name: feature },
      create: { name: feature },
    }));
    const technologiesConnectOrCreate = technologiesArray.map((technology) => ({
      where: { name: technology },
      create: { name: technology },
    }));
    const rolesConnectOrCreate = rolesArray.map((role) => ({
      where: { name: role },
      create: { name: role },
    }));

    await db.portfolioItem.create({
      data: {
        heading: result.data.heading,
        liveLink: result.data.livelink,
        order: result.data.order,
        fileNamesArr: result.data.fileNamesArr,
        features: {
          connectOrCreate: featuresConnectOrCreate,
        },
        technologiesUsed: {
          connectOrCreate: technologiesConnectOrCreate,
        },
        roles: {
          connectOrCreate: rolesConnectOrCreate,
        },
      },
    });
  } catch (err: unknown) {
    if (err instanceof Error) {
      return {
        errors: {
          _form: [err.message],
        },
      };
    } else {
      return {
        errors: { _form: ["Что-то пошло не так"] },
      };
    }
  }

  revalidatePath("/admin/portfolio");
  revalidatePath("/");

  redirect("/admin/portfolio");
}
