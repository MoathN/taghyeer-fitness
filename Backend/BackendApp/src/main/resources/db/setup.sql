-- Create database if it doesn't exist
CREATE DATABASE IF NOT EXISTS fitness_db CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- Create user if it doesn't exist and grant privileges
CREATE USER IF NOT EXISTS 'fitness_user'@'localhost' IDENTIFIED BY 'fitness_password';
CREATE USER IF NOT EXISTS 'fitness_user'@'%' IDENTIFIED BY 'fitness_password';

-- Grant privileges to the user
GRANT ALL PRIVILEGES ON fitness_db.* TO 'fitness_user'@'localhost';
GRANT ALL PRIVILEGES ON fitness_db.* TO 'fitness_user'@'%';

-- Apply changes
FLUSH PRIVILEGES; 