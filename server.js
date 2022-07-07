const mysql = require("mysql2");
const inquirer = require("inquirer");
// const consTable = require("console.table");

var db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "wrenpassword",
  database: "employees",
});

db.connect((err) => {
  if (err) throw err;
  console.log("Database connected.");
  startPrompt();
});

startPrompt = () => {
  inquirer
    .prompt([
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
          "Update an employee's role?",
        ],
      },
    ])
    .then((answer) => {
      console.log(answer);
      let userChoice = answer.choice;
      console.log(userChoice);
      switch (userChoice) {
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
};

//Add employee: first name - last name - employee role (select from list?) - employee's manager
const addEmployee = () => {
  inquirer.prompt([
    //First name
    {
      type: "input",
      name: "firstName",
      message: "What is the employee's first name?",
    },

    //Last name
    {
      type: "input",
      name: "lastName",
      message: "What is the employee's last name?",
    },

    //Employee role
    {
      type: "input",
      name: "role",
      message: "What is the employee's ID?",
    },
    //Manager ID
    {
      type: "input",
      name: "managerID",
      message: "What is the employee's manager's ID?",
    },
  ])
      .then((res) => {
        db.query(
          "INSERT INTO employee SET ?", 
          {
            first_name: res.firstName,
            last_name: res.lastName,
            role_id: res.role,
            manager_id: res.managerID,
          },
        (err, res) => {
          if (err) throw err;
          console.table(res);
          startPrompt();
        }
      );
    });
}

//Add role: name of role - salary of role - department role belongs to
const addRole = () => {
  return inquirer.prompt([
    //Role title
    {
      type: "input",
      name: "title",
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
      type: "input",
      name: "dept_id",
      message: "What department does the role belong to?",
      //Validate values throughout the prompted questions
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          return false;
        }
      },
    },
  ])
  .then((res) => {
      db.query(
        "INSERT INTO roles SET ?",
        {
          title: res.title,
          salary: res.salary,
          dept_id: res.dept_id,
        },
        (err, res) => {
          if (err) throw err;
          console.table(res);
          startPrompt();
        }
      );
    });
}


//Add department
const addDepartment = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "department",
      message: "What is the name of the department?",
    },
  ])
      .then(function (res) {
      db.query(
        "INSERT INTO departments SET ?",
        {
          dept_name: res.department,
        },
        function (err) {
          if (err) throw err;
          console.table(res);
          startPrompt();
        }
      );
    });
}

    
//Update employee role: which employee - select new role
const updateRole = () => {
  db.query("SELECT * FROM employee ORDER BY first_name", (err, res) => {
    let employee = res.map((employee) => {
      return {
        name: employee.first_name + " " + employee.last_name,
        value: employee.id,
      };
    });
    db.query("SELECT * FROM roles ORDER BY title", (err, res) => {
      let roles = res.map((role) => {
        return {
          name: role.title,
          value: role.id,
        };
      });
  inquirer
    .prompt([
      {
        type: "list",
        name: "updateEmployee",
        message: " Please enter employees name.",
        choices: employee,
      },
      {
        type: "list",
        name: "newRole",
        message: "What is the employee's new role?",
        choices: roles,
      },
    ])
    .then((res) => {
      db.query(
        "UPDATE employee SET role_id = ? WHERE id = ?",
        [res.newRole, res.updateEmployee],
        function (err) {
          if (err) throw err;
          console.table(res);
          startPrompt();
        }
      );
    });
    });
  });
}


function viewAllEmployees() {
  db.query("SELECT * FROM employee;", (err, res) => {
    if (err) throw err;
    console.table(res);
    startPrompt();
  });
}

function viewAllRoles() {
  db.query("SELECT * FROM roles;", (err, res) => {
    if (err) throw err;
    console.table(res);
    startPrompt();
  });
}

function viewAllDepartments() {
  db.query("SELECT * FROM departments;", (err, res) => {
    if (err) throw err;
    console.table(res);
    startPrompt();
  });
}
