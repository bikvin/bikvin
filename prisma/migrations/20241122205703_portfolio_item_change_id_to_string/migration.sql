/*
  Warnings:

  - The primary key for the `PortfilioItem` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "PortfilioItem" DROP CONSTRAINT "PortfilioItem_pkey",
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "PortfilioItem_pkey" PRIMARY KEY ("id");
