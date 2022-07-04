DROP TABLE IF EXISTS departments;
DROP TABLE IF EXISTS roles;
DROP TABLE IF EXISTS employee;
USE employees;

CREATE TABLE departments (
    id INT AUTO_INCREMENT PRIMARY KEY,
    dept_name VARCHAR(30) 
);

CREATE TABLE roles (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30),
    salary DECIMAL,
    dept_id INT,
    FOREIGN KEY (dept_id) REFERENCES departments(id)
);

CREATE TABLE employee (
    id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT,
    manager_id INT,
    FOREIGN KEY (role_id) REFERENCES roles(id),
    FOREIGN KEY (manager_id) REFERENCES employee(id)
);