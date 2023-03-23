-- CreateTable
CREATE TABLE `livros` (
    `idlivros` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(45) NOT NULL,
    `autor` VARCHAR(45) NOT NULL,

    PRIMARY KEY (`idlivros`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
