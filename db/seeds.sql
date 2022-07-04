INSERT INTO departments (dept_name) 
VALUES ("Customer Service"),
INSERT INTO departments (dept_name)
VALUES ("General Practice"),
INSERT INTO departments (dept_name)
VALUES ("Emergency")

INSERT INTO roles (title, salary, id, dept_id) VALUES
("Veterinarian", 60000, 1, 2),
INSERT INTO roles (title, salary, id, dept_id) VALUES
("Veterinary Technician", 35000, 2, 2),
INSERT INTO roles (title, salary, id, dept_id) VALUES 
("Veterinary Assistant", 28000, 3, 2),
INSERT INTO roles (title, salary, id, dept_id) VALUES
("Receptionist", 26000, 4, 1),
INSERT INTO roles (title, salary, id, dept_id) VALUES
("Practice Manager", 40000, 5, 1),
INSERT INTO roles (title, salary, id, dept_id) VALUES
("Hospital Manager", 50000, 6, 2),
INSERT INTO roles (title, salary, id, dept_id) VALUES
("Medical Director", 145000, 7, 2);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Anna", "Karenina", 2, 1),
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES
("Carrie", "White", 2, 1);

SELECT * FROM departments;
SELECT * FROM roles;
SELECT * FROM employee;