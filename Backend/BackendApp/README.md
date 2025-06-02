# TAGHYEER Fitness Backend

This is the backend for the TAGHYEER Fitness website.

## Database Setup (MySQL)

The application uses MySQL database running on port 3307.

### Using Docker (Recommended)

1. Make sure Docker and Docker Compose are installed on your system
2. Navigate to the project root directory (where docker-compose.yml is located)
3. Run the following command to start MySQL:

```shell
docker-compose up -d
```

This will start a MySQL container with the following configuration:
- Port: 3307
- Database: fitness_db
- Username: fitness_user
- Password: fitness_password

### Manual MySQL Setup

If you prefer to use an existing MySQL installation:

1. Make sure MySQL is running on port 3307
2. Create a database and user with the following commands:

```sql
CREATE DATABASE fitness_db CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
CREATE USER 'fitness_user'@'localhost' IDENTIFIED BY 'fitness_password';
CREATE USER 'fitness_user'@'%' IDENTIFIED BY 'fitness_password';
GRANT ALL PRIVILEGES ON fitness_db.* TO 'fitness_user'@'localhost';
GRANT ALL PRIVILEGES ON fitness_db.* TO 'fitness_user'@'%';
FLUSH PRIVILEGES;
```

## Running the Application

To run the application, use:

```shell
mvn spring-boot:run
```

The server will start on port 8080. 