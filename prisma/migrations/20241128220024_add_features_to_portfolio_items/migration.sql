-- CreateTable
CREATE TABLE "Feature" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Feature_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_PortfolioFeatures" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Feature_name_key" ON "Feature"("name");

-- CreateIndex
CREATE UNIQUE INDEX "_PortfolioFeatures_AB_unique" ON "_PortfolioFeatures"("A", "B");

-- CreateIndex
CREATE INDEX "_PortfolioFeatures_B_index" ON "_PortfolioFeatures"("B");

-- AddForeignKey
ALTER TABLE "_PortfolioFeatures" ADD CONSTRAINT "_PortfolioFeatures_A_fkey" FOREIGN KEY ("A") REFERENCES "Feature"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PortfolioFeatures" ADD CONSTRAINT "_PortfolioFeatures_B_fkey" FOREIGN KEY ("B") REFERENCES "PortfolioItem"("id") ON DELETE CASCADE ON UPDATE CASCADE;
