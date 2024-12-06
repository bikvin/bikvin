import CreateEditPortfolioForm from "@/components/admin/portfolio/create-edit/Create-Edit";
import Header from "@/components/admin/topMenu/topMenu";
import { db } from "@/db";

export default async function EditPortfolioItemPage({
  params,
}: {
  params: { itemId: string };
}) {
  const itemId = params.itemId;

  const portfolioItem = await db.portfolioItem.findUnique({
    where: { id: itemId },
    include: {
      features: true, // Include related features
      technologiesUsed: true,
      roles: true,
    },
  });

  if (!portfolioItem) {
    throw new Error("Item not found");
  }

  const imageData = JSON.parse(portfolioItem.fileNamesArr);

  let allFeaturesFromDb, allTechnologiesFromDb, allRolesFromDb;
  try {
    [allFeaturesFromDb, allTechnologiesFromDb, allRolesFromDb] =
      await Promise.all([
        db.feature.findMany({
          orderBy: [{ name: "asc" }],
        }),
        db.technologyUsed.findMany({
          orderBy: [{ name: "asc" }],
        }),
        db.role.findMany({
          orderBy: [{ name: "asc" }],
        }),
      ]);
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message); // Safe access when `error` is an `Error`
    } else {
      console.error("An unknown error occurred:", error); // Fallback for non-Error types
    }
    return <h1>Ошибка подключения к базе данных </h1>;
  }

  const allFeatures = allFeaturesFromDb || [];
  const allTechnologies = allTechnologiesFromDb || [];
  const allRoles = allRolesFromDb || [];

  return (
    <>
      <Header page="help" />
      <div className="max-w-screen-lg mt-10 mx-auto flex justify-center">
        <div className="w-[90%] md:w-1/2  mb-10">
          <h2 className="mt-10 admin-form-header">Редактировать</h2>
          <CreateEditPortfolioForm
            heading={portfolioItem.heading}
            livelink={portfolioItem.liveLink}
            id={portfolioItem.id}
            order={portfolioItem.order}
            imageData={imageData}
            allFeatures={allFeatures}
            startingFeatures={portfolioItem.features}
            allTechnologies={allTechnologies}
            startingTechnologies={portfolioItem.technologiesUsed}
            allRoles={allRoles}
            startingRoles={portfolioItem.roles}
            isEdit={true}
          />
        </div>
      </div>
    </>
  );
}
