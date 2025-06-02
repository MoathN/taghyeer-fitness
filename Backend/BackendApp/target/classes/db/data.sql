-- Insert some initial users (password is 'password')
INSERT INTO users (id, email, password, first_name, last_name, role) 
VALUES (1, 'admin@taghyeer.com', '$2a$10$j0AFmZnJ8L4DV0cGqwGxce0Ap5E9UDiU8hVFBw9o1Rr1cSsNXJ0wW', 'Admin', 'User', 'ADMIN')
ON DUPLICATE KEY UPDATE email=email;

INSERT INTO users (id, email, password, first_name, last_name, role) 
VALUES (2, 'user@taghyeer.com', '$2a$10$j0AFmZnJ8L4DV0cGqwGxce0Ap5E9UDiU8hVFBw9o1Rr1cSsNXJ0wW', 'Regular', 'User', 'USER')
ON DUPLICATE KEY UPDATE email=email;

-- Insert some memberships
INSERT INTO membership_plans (id, name, description, duration_months, price) 
VALUES (1, 'Basic', 'Access to basic facilities', 1, 50.00)
ON DUPLICATE KEY UPDATE name=name;

INSERT INTO membership_plans (id, name, description, duration_months, price) 
VALUES (2, 'Premium', 'Full access to all facilities', 3, 120.00)
ON DUPLICATE KEY UPDATE name=name;

INSERT INTO membership_plans (id, name, description, duration_months, price) 
VALUES (3, 'Gold', 'Full access plus personal trainer', 6, 250.00)
ON DUPLICATE KEY UPDATE name=name;

-- Insert some workout plans
INSERT INTO workout_plans (id, name, description, difficulty_level, duration_weeks)
VALUES (1, 'Beginner Cardio', 'Simple cardio exercises for beginners', 'BEGINNER', 4)
ON DUPLICATE KEY UPDATE name=name;

INSERT INTO workout_plans (id, name, description, difficulty_level, duration_weeks)
VALUES (2, 'Intermediate Strength', 'Strength training for intermediate users', 'INTERMEDIATE', 8)
ON DUPLICATE KEY UPDATE name=name;

INSERT INTO workout_plans (id, name, description, difficulty_level, duration_weeks)
VALUES (3, 'Advanced Full Body', 'Comprehensive full body workout for advanced users', 'ADVANCED', 12)
ON DUPLICATE KEY UPDATE name=name; 