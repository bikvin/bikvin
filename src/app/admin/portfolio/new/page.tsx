import CreateEditPortfolioForm from "@/components/admin/portfolio/create-edit/Create-Edit";
import Header from "@/components/admin/topMenu/topMenu";
import { db } from "@/db";

export default async function CreatePortfolioItemPage() {
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
          <h2 className="mt-10 admin-form-header">
            Создать новую единицу портфолио
          </h2>
          <CreateEditPortfolioForm
            imageData={[]}
            allFeatures={allFeatures}
            startingFeatures={[]}
            allTechnologies={allTechnologies}
            startingTechnologies={[]}
            allRoles={allRoles}
            startingRoles={[]}
          />
        </div>
      </div>
    </>
  );
}
