/*
  Warnings:

  - Made the column `bio` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `User` MODIFY `bio` VARCHAR(191) NOT NULL;
