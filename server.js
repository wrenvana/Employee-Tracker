const mysql = require("mysql2");
const inquirer = require("inquirer");
const consTable = require("console.table");

var db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "wrenpassword",
  database: 'employees'
});

db.connect((err) => {
  if (err) throw err;
  console.log("Database connected.");
  startPrompt();
});

startPrompt = () => {
  inquirer.prompt([
  {
    type: "list",
    message: "Select an option.",
    name: "choice",
    choices: [
      "View all departments?",
      "View all roles?",
      "View all employees?",
      "Add a department?",
      "Add a role?",
      "Add an employee?",
      "Update an employee's role?"
    ]
  }
  ])
  .then((answer) => {
      console.log(answer);
      let userChoice = answer.choice;
      console.log(userChoice);
      switch(userChoice) {
        case "View all departments?":
          viewAllDepartments();
          break;
        case "View all roles?":
          viewAllRoles();
          break;
        case "View all employees?":
          viewAllEmployees();
          break;
        case "Add a department?":
        addDepartment();
        break;
        case "Add a role?":
          addRole();
          break;
        case "Add an employee?":
        addEmployee();
        break;
        case "Update an employee's role?":
          updateRole();
          break;
      }
    });
}

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
    choices: [
      "Veterinarian", 
      "Veterinary Technician", 
      "Veterinary Assistant", 
      "Practice Manager", 
      "Hospital Manager", 
      "Medical Director" ],
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
    choices: [
      "Customer Service",
      "General Practice",
      "Emergency"
    ],
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
    choices: [
      "Veterinarian",
      "Veterinary Technician",
      "Veterinary Assistant",
      "Receptionist",
      "Practice Manager",
      "Hospital Manager",
      "Medical Director"
    ],
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


function viewAllEmployees() {
  db.query("SELECT * FROM employee", (err, res) => {
    if (err) throw err;
    console.clear();
    console.log("Employees");
    const table = consTable.getTable(res);
    console.log(table);
    startPrompt();
  });
}

function viewAllRoles() {
  db.query("SELECT * FROM roles", (err, res) => {
    if (err) throw err;
    console.clear();
    console.log("Roles");
    const table = consTable.getTable(res);
    console.log(table);
    startPrompt();
  });
}

function viewAllDepartments() {
  db.query("SELECT * FROM departments", (err, res) => {
    if (err) throw err;
    console.clear();
    console.log("Departments");
    const table = consTable.getTable(res);
    console.log(table);
    startPrompt();
  });
}