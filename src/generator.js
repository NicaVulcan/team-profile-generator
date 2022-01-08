const inquirer = require("inquirer");
const Employee = require("../lib/Employee");
const Manager = require("../lib/Manager");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");
const employeeRoster = [];

const questions = [
    {
        type: "input",
        name: "name",
        message: "Employee Name:",
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log("Please enter name!");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "id",
        message: "Employee ID:",
        validate: idInput => {
            if (idInput) {
                if (isNaN(idInput)) {
                    console.log("Please enter a valid ID!")
                    return false;
                } else {
                    return true;
                }
            } else {
                console.log("Please enter an ID!")
                return false;
            }
        }
    },
    {
        type: "input",
        name: "email",
        message: "Employee Email:",
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log("Please enter email address!");
                return false;
            }
        }
    }
];


const managerQ = {
    type: "input",
    name: "office",
    message: "Office Number:",
    validate: officeInput => {
        if (officeInput) {
            if (isNaN(officeInput)) {
                console.log("Please enter a valid office number!")
                return false;
            } else {
                return true;
            }
        } else {
            console.log("Please enter an office number!")
            return false;
        }
    }
};


const engineerQ = {
    type: "input",
    name: "github",
    message: "GitHub username:",
    validate: githubInput => {
        if (githubInput) {
            return true;
        } else {
            console.log("Please enter GitHub username!");
            return false;
        }
    }
};

const internQ = {
    type: "input",
    name: "github",
    message: "School Name:",
    validate: githubInput => {
        if (githubInput) {
            return true;
        } else {
            console.log("Please enter name of school!");
            return false;
        }
    }
};

const enterEmployee = (questionArr) => {
    return inquirer
        .prompt(questionArr);
};

const generateHTML = () => {
    console.log("this will generate a new HTML file");
};

const addEmployee = () => {
    return inquirer
        .prompt([
            {
                type: "list",
                name: "chooseAdd",
                message: "Would you like to add an employee?",
                choices: ["Add a Manager", "Add an Engineer", "Add an Intern", "Generate HTML"]
            }
        ])
        .then(answer => {
            switch (answer.chooseAdd) {
                case "Add a Manager":
                    questions.push(managerQ);
                    enterEmployee(questions);
                    break;
                case "Add an Engineer":
                    questions.push(engineerQ);
                    enterEmployee(questions);
                    break;
                case "Add an Intern":
                    questions.push(internQ);
                    enterEmployee(questions);
                    break;
                case "Generate HTML":
                    generateHTML();
                    break;
            }
        })
        ;
}

addEmployee();



