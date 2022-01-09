const inquirer = require("inquirer");
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
    name: "school",
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

const enterManager = () => {
    let manQArr = [...questions];
    manQArr.push(managerQ);
    return inquirer
        .prompt(manQArr)
        .then(details => {
            const manager = new Manager(details.name, details.id, details.email, details.office);
            console.table(manager)
            employeeRoster.push(manager);
            addEmployee();
        })
}
const enterEngineer = () => {
    let engQArr = [...questions];
    engQArr.push(engineerQ);
    return inquirer
        .prompt(engQArr)
        .then(details => {
            const engineer = new Engineer(details.name, details.id, details.email, details.github);
            console.table(engineer)
            employeeRoster.push(engineer);
            addEmployee();
        })
}
const enterIntern = () => {
    let intQArr = [...questions];
    intQArr.push(internQ);
    return inquirer
        .prompt(intQArr)
        .then(details => {
            const intern = new Intern(details.name, details.id, details.email,  details.school);
            console.table(intern)
            employeeRoster.push(intern);
            addEmployee();
        })
}

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
                    enterManager();
                    break;
                case "Add an Engineer":
                    enterEngineer();
                    break;
                case "Add an Intern":
                    enterIntern();
                    break;
                case "Generate HTML":
                    console.table(employeeRoster);
                    generateHTML();
                    break;
            }
        })
        ;
}

addEmployee();



