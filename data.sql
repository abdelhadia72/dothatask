USE dothatask;

-- Create sample data for the Category table
INSERT INTO Category (category_name)
VALUES ('Category 1'), ('Category 2'), ('Category 3'), ('Category 4'), ('Category 5'),
       ('Category 6'), ('Category 7'), ('Category 8'), ('Category 9'), ('Category 10'),
       ('Category 11'), ('Category 12'), ('Category 13'), ('Category 14'), ('Category 15');

-- Create sample data for the User table
INSERT INTO User (first_name, last_name, password, email, user_gender, user_phone, user_address, user_role, city_id)
VALUES ('John', 'Doe', 'password1', 'john.doe@example.com', 'Male', '1234567890', '123 Main St', 'User', 1),
       ('Jane', 'Smith', 'password2', 'jane.smith@example.com', 'Female', '9876543210', '456 Elm St', 'User', 2),
       ('Michael', 'Johnson', 'password3', 'michael.johnson@example.com', 'Male', '5555555555', '789 Oak St', 'User', 3),
       ('Emily', 'Brown', 'password4', 'emily.brown@example.com', 'Female', '1111111111', '321 Pine St', 'User', 4),
       ('David', 'Wilson', 'password5', 'david.wilson@example.com', 'Male', '9999999999', '654 Cedar St', 'User', 5),
       ('Sarah', 'Taylor', 'password6', 'sarah.taylor@example.com', 'Female', '2222222222', '987 Maple St', 'User', 1),
       ('Christopher', 'Anderson', 'password7', 'christopher.anderson@example.com', 'Male', '8888888888', '654 Birch St', 'User', 2),
       ('Jessica', 'Thomas', 'password8', 'jessica.thomas@example.com', 'Female', '3333333333', '321 Walnut St', 'User', 3),
       ('Matthew', 'Jackson', 'password9', 'matthew.jackson@example.com', 'Male', '7777777777', '789 Pine St', 'User', 4),
       ('Amanda', 'White', 'password10', 'amanda.white@example.com', 'Female', '4444444444', '987 Oak St', 'User', 5),
       ('Andrew', 'Harris', 'password11', 'andrew.harris@example.com', 'Male', '6666666666', '123 Elm St', 'User', 1),
       ('Stephanie', 'Martin', 'password12', 'stephanie.martin@example.com', 'Female', '5555555555', '456 Main St', 'User', 2),
       ('Daniel', 'Thompson', 'password13', 'daniel.thompson@example.com', 'Male', '4444444444', '789 Elm St', 'User', 3),
       ('Lauren', 'Garcia', 'password14', 'lauren.garcia@example.com', 'Female', '3333333333', '321 Main St', 'User', 4),
       ('Ryan', 'Martinez', 'password15', 'ryan.martinez@example.com', 'Male', '2222222222', '654 Elm St', 'User', 5);

-- Create sample data for the Worker table
INSERT INTO Worker (image_url, status, user_id)
VALUES
    ('worker1.jpg', 'Active', 31),
    ('worker2.jpg', 'Active', 36),
    ('worker3.jpg', 'Active', 41),
    ('worker4.jpg', 'Active', 32),
    ('worker5.jpg', 'Active', 37),
    ('worker6.jpg', 'Active', 42),
    ('worker7.jpg', 'Active', 33),
    ('worker8.jpg', 'Active', 38),
    ('worker9.jpg', 'Active', 43),
    ('worker10.jpg', 'Active', 34),
    ('worker11.jpg', 'Active', 39),
    ('worker12.jpg', 'Active', 44),
    ('worker13.jpg', 'Active', 35),
    ('worker14.jpg', 'Active', 40),
    ('worker15.jpg', 'Active', 45);

-- Create sample data for the Task table
INSERT INTO Task (task_title, description, budget, location, category_id, worker_id)
VALUES
    ('Task 1', 'Description for Task 1', 100.00, 'Location 1', 1, 91),
    ('Task 2', 'Description for Task 2', 200.00, 'Location 2', 2, 92),
    ('Task 3', 'Description for Task 3', 300.00, 'Location 3', 3, 93),
    ('Task 4', 'Description for Task 4', 400.00, 'Location 4', 4, 94),
    ('Task 5', 'Description for Task 5', 500.00, 'Location 5', 5, 95),
    ('Task 6', 'Description for Task 6', 600.00, 'Location 6', 6, 96),
    ('Task 7', 'Description for Task 7', 700.00, 'Location 7', 7, 97),
    ('Task 8', 'Description for Task 8', 800.00, 'Location 8', 8, 98),
    ('Task 9', 'Description for Task 9', 900.00, 'Location 9', 9, 99),
    ('Task 10', 'Description for Task 10', 1000.00, 'Location 10', 10, 100),
    ('Task 11', 'Description for Task 11', 1100.00, 'Location 11', 11, 101),
    ('Task 12', 'Description for Task 12', 1200.00, 'Location 12', 12, 102),
    ('Task 13', 'Description for Task 13', 1300.00, 'Location 13', 13, 103),
    ('Task 14', 'Description for Task 14', 1400.00, 'Location 14', 14, 104),
    ('Task 15', 'Description for Task 15', 1500.00, 'Location 15', 15, 105);

-- Create sample data for the TaskImage table
INSERT INTO TaskImage (task_id, image_id)
VALUES
    (91, 1),
    (92, 2),
    (93, 3),
    (94, 4),
    (95, 5),
    (96, 6),
    (97, 7),
    (98, 8),
    (99, 9),
    (100, 10),
    (101, 11),
    (102, 12),
    (103, 13),
    (104, 14),
    (105, 15);

-- Create sample data for the Image table DD
INSERT INTO Image (image_url)
VALUES ('image1.jpg'), ('image2.jpg'), ('image3.jpg'), ('image4.jpg'), ('image5.jpg'),
       ('image6.jpg'), ('image7.jpg'), ('image8.jpg'), ('image9.jpg'), ('image10.jpg'),
       ('image11.jpg'), ('image12.jpg'), ('image13.jpg'), ('image14.jpg'), ('image15.jpg');

-- Create sample data for the City table DD
INSERT INTO City (city_name, zone, postcode)
VALUES ('City 1', 'Zone 1', '10001'), ('City 2', 'Zone 2', '20002'), ('City 3', 'Zone 3', '30003'),
       ('City 4', 'Zone 4', '40004'), ('City 5', 'Zone 5', '50005');

COMMIT;
