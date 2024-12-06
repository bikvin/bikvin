-- CreateTable
CREATE TABLE "TechnologyUsed" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TechnologyUsed_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Role" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Role_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_PortfolioTechnologies" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_PortfolioRoles" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "TechnologyUsed_name_key" ON "TechnologyUsed"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Role_name_key" ON "Role"("name");

-- CreateIndex
CREATE UNIQUE INDEX "_PortfolioTechnologies_AB_unique" ON "_PortfolioTechnologies"("A", "B");

-- CreateIndex
CREATE INDEX "_PortfolioTechnologies_B_index" ON "_PortfolioTechnologies"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_PortfolioRoles_AB_unique" ON "_PortfolioRoles"("A", "B");

-- CreateIndex
CREATE INDEX "_PortfolioRoles_B_index" ON "_PortfolioRoles"("B");

-- AddForeignKey
ALTER TABLE "_PortfolioTechnologies" ADD CONSTRAINT "_PortfolioTechnologies_A_fkey" FOREIGN KEY ("A") REFERENCES "PortfolioItem"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PortfolioTechnologies" ADD CONSTRAINT "_PortfolioTechnologies_B_fkey" FOREIGN KEY ("B") REFERENCES "TechnologyUsed"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PortfolioRoles" ADD CONSTRAINT "_PortfolioRoles_A_fkey" FOREIGN KEY ("A") REFERENCES "PortfolioItem"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PortfolioRoles" ADD CONSTRAINT "_PortfolioRoles_B_fkey" FOREIGN KEY ("B") REFERENCES "Role"("id") ON DELETE CASCADE ON UPDATE CASCADE;
