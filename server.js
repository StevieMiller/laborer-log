// Import dependencies
const inquirer = require("inquirer");
const mysql = require("mysql2");
const consoleTable = require("console.table");

const PORT = process.env.PORT || 3001;

// Connection to database
const db = mysql.createConnection(
  {
    host: "127.0.0.1",
    user: "root",
    password: "1234",
    database: "employee_db",
  },
  console.log("Connected to database")
);

// Variable that holds array of questions
const questions = [
  {
    type: "list",
    name: "directory",
    message: "What would you like to do?",
    choices: [
      "View all departments",
      "View all roles",
      "View all employees",
      "Add a department",
      "Add a role",
      "Add an employee",
      "Update an employee role",
      "Exit",
    ],
  },
];

function inquire() {
  inquirer.prompt(questions).then((res) => {
    console.log(res);
    // switch case to check for selection, then fire function that takes user to the next step
    // case for each prompt
    switch (res.directory) {
      case "View all departments":
        // function to view depts
        viewDepts();
        break;
      case "View all roles":
        // function to view roles
        viewRoles();
        break;
      case "View all employees":
        // function to view employees
        viewEmps();
        break;
      case "Add a department":
        // function to add dept
        addDept();
        break;
      case "Add a role":
        // function to add role
        addRole();
        break;
      case "Add an employee":
        // function to add employee
        addEmp();
        break;
      case "Update a role":
        // function to update role
        break;
      case "Quit":
        // function to quit
        break;
    }
  });
}

// Function to view departments
const viewDepts = () =>
  db.query("SELECT * FROM departments", (err, res) => {
    if (err) throw err;
    console.table("Departments", res);
    inquire();
  });
// Function to view roles
const viewRoles = () =>
  db.query("SELECT * FROM roles", (err, res) => {
    if (err) throw err;
    console.table("Roles", res);
    inquire();
  });
// Function to view employees
const viewEmps = () =>
  db.query("SELECT * FROM employees", (err, res) => {
    if (err) throw err;
    console.table("Employees", res);
    inquire();
  });
// Function to add department
const addDept = () => {
  inquirer
    .prompt({
      type: "input",
      name: "newDept",
      message: "Department name:",
    })
    .then((res) => {
      db.query(
        "INSERT INTO departments (dept_name) VALUES (?)",
        res.newDept,
        (err, results) => {
          if (err) throw err;
          console.log(`Successfully added new department: ${res.newDept}`);
          inquire();
        }
      );
    });
};
// Function to add a role
const addRole = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "title",
        message: "Role name:",
      },
      {
        type: "input",
        name: "salary",
        message: "Salary:",
      },
      {
        type: "input",
        name: "dept_id",
        message: "Department ID:",
      },
    ])
    .then((res) => {
      db.query(
        "INSERT INTO roles (title, salary, dept_id) VALUES (?, ?, ?)",
        [res.title, res.salary, res.dept_id],
        (err, results) => {
          if (err) throw err;
          console.log(`Successfully added new role: ${res.title}`);
          inquire();
        }
      );
    });
};
// Function to add an employee
const addEmp = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "first_name",
        message: "First name:",
      },
      {
        type: "input",
        name: "last_name",
        message: "Last name:",
      },
      {
        type: "input",
        name: "role_id",
        message: "Role ID:",
      },
      {
        type: "input",
        name: "manager_id",
        message: "Manager ID:",
      },
    ])
    .then((res) => {
      db.query(
        "INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)",
        [res.first_name, res.last_name, res.role_id, res.manager_id],
        (err, results) => {
          if (err) throw err;
          console.log(
            `Successfully added new employee: ${res.first_name} ${res.last_name}`
          );
          inquire();
        }
      );
    });
};
// Function to update a role

// Function to initialize app
inquire();
