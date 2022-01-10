const inquirer = require("inquirer");
const generateHTML = require("./page-template");
const { writeFile, copyFile } = require("./create-file");
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
            const managerObj = details;
            console.table(managerObj)
            employeeRoster.push(managerObj);
            employeePrompts();
        })
}
const enterEngineer = () => {
    let engQArr = [...questions];
    engQArr.push(engineerQ);
    return inquirer
        .prompt(engQArr)
        .then(details => {
            const engineerObj = details;
            console.table(engineerObj)
            employeeRoster.push(engineerObj);
            employeePrompts();
        })
}
const enterIntern = () => {
    let intQArr = [...questions];
    intQArr.push(internQ);
    return inquirer
        .prompt(intQArr)
        .then(details => {
            const internObj = details;
            console.table(internObj)
            employeeRoster.push(internObj);
            employeePrompts();
        })
}

const readyEmployee = () => {
    console.log("You have entered the following employees:")
    console.table(employeeRoster);
    return generateHTML(employeeRoster);
};

const employeePrompts = () => {
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
            if (answer.chooseAdd === "Add a Manager") {
                return enterManager();
            } else if (answer.chooseAdd === "Add an Engineer") {
                return enterEngineer();
            } else if (answer.chooseAdd === "Add an Intern") {
                return enterIntern();
            } else {
                return readyEmployee();
            }
        });
}
module.exports = employeePrompts;




