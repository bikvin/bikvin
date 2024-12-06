-- CreateTable
CREATE TABLE "PortfilioItem" (
    "id" INTEGER NOT NULL,
    "fileNamesArr" TEXT NOT NULL,
    "heading" TEXT NOT NULL,
    "liveLink" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PortfilioItem_pkey" PRIMARY KEY ("id")
);
