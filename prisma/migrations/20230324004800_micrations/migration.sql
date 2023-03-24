-- CreateTable
CREATE TABLE `reservas` (
    `name` VARCHAR(45) NOT NULL,
    `cpf` VARCHAR(20) NOT NULL,
    `livro` VARCHAR(35) NOT NULL,

    PRIMARY KEY (`cpf`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
