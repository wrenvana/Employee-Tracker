INSERT INTO departments (dept_name) 
VALUES ("Customer Service"),
INSERT INTO departments (dept_name)
VALUES ("General Practice"),
INSERT INTO departments (dept_name)
VALUES ("Emergency")

INSERT INTO roles (title, salary, dept_id) 
VALUES ("Veterinarian", 120000, 2),
("Veterinary Technician", 35000, 2),
("Veterinary Assistant", 28000, 2),
("Receptionist", 26000, 1),
("Practice Manager", 40000, 1),
("Hospital Manager", 50000, 2),
("Medical Director", 145000, 2);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Anna", "Karenina", 1, NULL),
("Carrie", "White", 2, 1);