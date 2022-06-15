const inquirer = require("inquirer");
const mysql = require("mysql2");
const fs = require("fs");
const util = require("util");
const consTable = require("console.table");

//Add employee: first name - last name - employee role (select from list?) - employee's manager
const addEmployee = () => {
return inquirer.prompt([
    //First name
    {
    type: "input",
    name: "firstName",
    message: "What is the employee's first name?",
      //Validate values throughout the prompted questions
    validate: (nameInput) => {
        if (nameInput) {
        return true;
        } else {
        return false;
        }
    },
    },

    //Last name
    {
    type: "input",
    name: "lastName",
    message: "What is the employee's last name?",
      //Validate values throughout the prompted questions
    validate: (nameInput) => {
        if (nameInput) {
        return true;
        } else {
        return false;
        }
    },
    },

    //Employee role
    {
    type: "checkbox",
    name: "role",
    message: "What is the employee's role?",
    choices: ["Veterinarian", "Veterinary Technician", "Veterinary Assistant", "Practice Manager", "Hospital Manager", "Medical Director" ],
      //Validate values throughout the prompted questions
    validate: (nameInput) => {
        if (nameInput) {
        return true;
        } else {
        return false;
        }
    },
    },

    //Employee's manager
    {
    type: "checkbox",
    name: "role",
    message: "Who is the employee's manager?",
    choices: [],
      //Validate values throughout the prompted questions
    validate: (nameInput) => {
        if (nameInput) {
        return true;
        } else {
        return false;
        }
    },
    },
]);
};


//Add role: name of role - salary of role - department role belongs to
const addRole = () => {
return inquirer.prompt([
    //Role title
    {
    type: "input",
    name: "roleTitle",
    message: "What is the role title?",
      //Validate values throughout the prompted questions
    validate: (nameInput) => {
        if (nameInput) {
        return true;
        } else {
        return false;
        }
    },
    },

    //Salary
    {
    type: "input",
    name: "salary",
    message: "What is the role's salary?",
      //Validate values throughout the prompted questions
    validate: (nameInput) => {
        if (nameInput) {
        return true;
        } else {
        return false;
        }
    },
    },

    //Department
    {
    type: "checkbox",
    name: "role",
    message: "What department does the role belong to?",
    choices: [],
      //Validate values throughout the prompted questions
    validate: (nameInput) => {
        if (nameInput) {
        return true;
        } else {
        return false;
        }
    },
    },
]);
};


//Add department
const addDepartment = () => {
    return inquirer.prompt([
    {
    type: "input",
    name: "department",
    message: "What is the name of the department?",
    validate: (nameInput) => {
        if (nameInput) {
        return true;
        } else {
        return false;
        }
    },
    },
    ]);
};

//Update employee role: which employee - select new role
const updateRole = () => {
    return inquirer.prompt([
    {
    type: "checkbox",
    name: "newRole",
    message: "What is the employee's new role?",
    choices: [],
    validate: (nameInput) => {
        if (nameInput) {
        return true;
        } else {
        return false;
        }
    },
    },
    ]);
};

//TODO: Insert table to view all employees

//TODO: Insert table to view all roles

//TODO: Insert table to view all departments