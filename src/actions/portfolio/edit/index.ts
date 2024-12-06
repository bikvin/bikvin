"use server";

import { db } from "@/db";
import { redirect } from "next/navigation";
import { editPortfolioItemSchema } from "@/zod/portfolio";
import { revalidatePath } from "next/cache";

interface EditPortfolioItemFormState {
  errors: {
    heading?: string[];
    livelink?: string[];
    id?: string[];
    fileNamesArr?: string[];
    features?: string[];
    technologies?: string[];
    roles?: string[];
    order?: string[];
    _form?: string[];
  };
}

export async function editPortfolioItem(
  formState: EditPortfolioItemFormState,
  formData: FormData
): Promise<EditPortfolioItemFormState> {
  const order = formData.get("order");

  const parsedOrder = order ? Number(order) : undefined;

  const result = editPortfolioItemSchema.safeParse({
    id: formData.get("id"),
    heading: formData.get("heading"),
    livelink: formData.get("livelink"),
    fileNamesArr: formData.get("fileNamesArr"),
    features: formData.get("featuresJSON"),
    technologies: formData.get("technologiesJSON"),
    roles: formData.get("rolesJSON"),
    order: parsedOrder,
  });

  if (!result.success) {
    return {
      errors: result.error.flatten().fieldErrors,
    };
  }
  const featuresString = result.data?.features || "";
  const newFeaturesArray = JSON.parse(featuresString) as string[];

  const technologiesString = result.data?.technologies || "";
  const newTechnologiesArray = JSON.parse(technologiesString) as string[];

  const rolesString = result.data?.roles || "";
  const newRolesArray = JSON.parse(rolesString) as string[];

  // Step 2: Fetch existing features for the PortfolioItem
  const existingPortfolioItem = await db.portfolioItem.findUnique({
    where: { id: result.data.id },
    include: { features: true, technologiesUsed: true, roles: true }, // Include associated features
  });

  if (!existingPortfolioItem) {
    return {
      errors: {
        _form: [`PortfolioItem with ID ${result.data.id} not found`],
      },
    };
  }

  const existingFeatures = existingPortfolioItem.features.map(
    (feature) => feature.name // ['feature1', 'feature2']
  );

  const existingTechnologies = existingPortfolioItem.technologiesUsed.map(
    (technology) => technology.name // ['technology1', 'technology2']
  );

  const existingRoles = existingPortfolioItem.roles.map(
    (role) => role.name // ['role1', 'role2']
  );

  // Step 3: Determine features to disconnect, connect, and keep
  const featuresToDisconnect = existingPortfolioItem.features.filter(
    // [{id:string, name:string, createdAt...}]
    (feature) => !newFeaturesArray.includes(feature.name)
  );
  const featuresToConnectOrCreate = newFeaturesArray.filter(
    // ['feature1', 'feature2']
    (featureName) => !existingFeatures.includes(featureName)
  );

  const technologiesToDisconnect =
    existingPortfolioItem.technologiesUsed.filter(
      // [{id:string, name:string, createdAt...}]
      (technology) => !newTechnologiesArray.includes(technology.name)
    );
  const technologiesToConnectOrCreate = newTechnologiesArray.filter(
    // ['technology1', 'technology2']
    (technology) => !existingTechnologies.includes(technology)
  );

  const rolesToDisconnect = existingPortfolioItem.roles.filter(
    // [{id:string, name:string, createdAt...}]
    (role) => !newRolesArray.includes(role.name)
  );
  const rolesToConnectOrCreate = newRolesArray.filter(
    // ['role1', 'role2']
    (role) => !existingRoles.includes(role)
  );

  try {
    await db.portfolioItem.update({
      where: {
        id: result.data.id,
      },
      data: {
        heading: result.data.heading,
        liveLink: result.data.livelink,
        fileNamesArr: result.data.fileNamesArr,
        order: result.data.order,
        features: {
          // Disconnect features no longer in the string
          disconnect: featuresToDisconnect.map((feature) => ({
            id: feature.id,
          })),

          // Connect or create new features
          connectOrCreate: featuresToConnectOrCreate.map((featureName) => ({
            where: { name: featureName }, // Try to find the feature
            create: { name: featureName }, // Create if it doesn't exist
          })),
        },
        technologiesUsed: {
          // Disconnect features no longer in the string
          disconnect: technologiesToDisconnect.map((technology) => ({
            id: technology.id,
          })),

          // Connect or create new features
          connectOrCreate: technologiesToConnectOrCreate.map(
            (technologyName) => ({
              where: { name: technologyName }, // Try to find
              create: { name: technologyName }, // Create if it doesn't exist
            })
          ),
        },
        roles: {
          // Disconnect features no longer in the string
          disconnect: rolesToDisconnect.map((role) => ({
            id: role.id,
          })),

          // Connect or create new features
          connectOrCreate: rolesToConnectOrCreate.map((roleName) => ({
            where: { name: roleName }, // Try to find
            create: { name: roleName }, // Create if it doesn't exist
          })),
        },
      },
    });

    revalidatePath("/admin/portfolio");
    revalidatePath("/");
    revalidatePath(`/portfolioItem/${result.data.id}`);
  } catch (err: unknown) {
    if (err instanceof Error) {
      return {
        errors: {
          _form: [err.message],
        },
      };
    } else {
      return {
        errors: {
          _form: ["Something went wrong"],
        },
      };
    }
  }

  redirect("/admin/portfolio");
}
