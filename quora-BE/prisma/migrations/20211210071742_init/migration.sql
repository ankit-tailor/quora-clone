-- DropForeignKey
ALTER TABLE `Opinion` DROP FOREIGN KEY `Opinion_authorId_fkey`;

-- DropForeignKey
ALTER TABLE `Opinion` DROP FOREIGN KEY `Opinion_questionId_fkey`;

-- DropForeignKey
ALTER TABLE `Question` DROP FOREIGN KEY `Question_authorId_fkey`;

-- AddForeignKey
ALTER TABLE `Question` ADD CONSTRAINT `Question_authorId_fkey` FOREIGN KEY (`authorId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Opinion` ADD CONSTRAINT `Opinion_authorId_fkey` FOREIGN KEY (`authorId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Opinion` ADD CONSTRAINT `Opinion_questionId_fkey` FOREIGN KEY (`questionId`) REFERENCES `Question`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
