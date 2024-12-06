/*
  Warnings:

  - You are about to drop the `PortfilioItem` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "PortfilioItem";

-- CreateTable
CREATE TABLE "PortfolioItem" (
    "id" TEXT NOT NULL,
    "fileNamesArr" TEXT NOT NULL,
    "heading" TEXT NOT NULL,
    "liveLink" TEXT NOT NULL,
    "order" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PortfolioItem_pkey" PRIMARY KEY ("id")
);
