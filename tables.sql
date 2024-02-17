USE dothatask;
CREATE TABLE `Category`(
                           `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
                           `category_name` VARCHAR(100) NOT NULL
);
CREATE TABLE `User`(
                       `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
                       `first_name` VARCHAR(100) NOT NULL,
                       `last_name` VARCHAR(100) NOT NULL,
                       `password` VARCHAR(255) NOT NULL,
                       `email` VARCHAR(255) NOT NULL,
                       `user_gender` VARCHAR(100) NOT NULL,
                       `user_phone` VARCHAR(20) NULL,
                       `user_address` VARCHAR(255) NULL,
                       `user_role` VARCHAR(200) NOT NULL,
                       `city_id` BIGINT UNSIGNED NULL
);
ALTER TABLE
    `User` ADD UNIQUE `user_email_unique`(`email`);
CREATE TABLE `Worker`(
                         `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
                         `image_url` VARCHAR(255) NOT NULL,
                         `status` VARCHAR(200) NOT NULL,
                         `user_id` BIGINT UNSIGNED NOT NULL
);
CREATE TABLE `Task`(
                       `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
                       `task_title` VARCHAR(255) NOT NULL,
                       `description` TEXT NOT NULL,
                       `budget` DECIMAL(10, 2) NOT NULL,
                       `location` VARCHAR(255) NOT NULL,
                       `category_id` BIGINT UNSIGNED NOT NULL,
                       `worker_id` BIGINT UNSIGNED NULL
);
CREATE TABLE `TaskImage`(
                            `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
                            `task_id` BIGINT UNSIGNED NOT NULL,
                            `image_id` BIGINT UNSIGNED NOT NULL
);
CREATE TABLE `Image`(
                        `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
                        `image_url` VARCHAR(255) NOT NULL
);
CREATE TABLE `City`(
                       `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
                       `city_name` VARCHAR(100) NOT NULL,
                       `zone` VARCHAR(100) NOT NULL,
                       `postcode` VARCHAR(20) NOT NULL
);
ALTER TABLE
    `Worker` ADD CONSTRAINT `worker_user_id_foreign` FOREIGN KEY(`user_id`) REFERENCES `User`(`id`);
ALTER TABLE
    `User` ADD CONSTRAINT `user_city_id_foreign` FOREIGN KEY(`city_id`) REFERENCES `City`(`id`);
ALTER TABLE
    `Task` ADD CONSTRAINT `task_category_id_foreign` FOREIGN KEY(`category_id`) REFERENCES `Category`(`id`);
ALTER TABLE
    `Task` ADD CONSTRAINT `task_worker_id_foreign` FOREIGN KEY(`worker_id`) REFERENCES `Worker`(`id`);
ALTER TABLE
    `TaskImage` ADD CONSTRAINT `taskimage_image_id_foreign` FOREIGN KEY(`image_id`) REFERENCES `Image`(`id`);
ALTER TABLE
    `TaskImage` ADD CONSTRAINT `taskimage_task_id_foreign` FOREIGN KEY(`task_id`) REFERENCES `Task`(`id`);