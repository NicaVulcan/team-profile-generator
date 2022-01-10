const Manager = require("../lib/Manager");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");
const { writeFile, copyFile } = require("./create-file")

let htmlContent;

const generateHTML = (employeeArr) => {
    htmlContent = `
    <!DOCTYPE html>
    <html lang=eng>
    <head>
        <meta charset="UTF-8">
        <meta name="veiwport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Team Profile</title>
        <link rel="stylesheet" href="style.css">
    <head>

    <body>
        <header>
                <h1>My Team</h1>
        </header>

        <main>
            <section>
                ${employeeArr
            .filter(employee => employee.office)
            .map(info => {
                const manager = new Manager(info.name, info.id, info.email, info.office);
                return `
                            <div class="employee-card">
                                <h2>${manager.getName()}</h2>
                                <h3>${manager.getRole()}</h3>
                                <hr>
                                <ul>
                                    <li>ID: ${manager.getId()}</li>
                                    <li>Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
                                    <li>Office #: ${manager.getOffice()}</li>
                                </ul>
                            </div>
                            `;
            })
            .join("")}
            </section>
            <section>
                ${employeeArr
            .filter(employee => employee.github)
            .map(info => {
                const engineer = new Engineer(info.name, info.id, info.email, info.github);
                return `
                            <div class="employee-card">
                                <h2>${engineer.getName()}</h2>
                                <h3>${engineer.getRole()}</h3>
                                <hr>
                                <ul>
                                    <li>ID: ${engineer.getId()}</li>
                                    <li>Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
                                    <li>GitHub: <a href="https://github.com/${engineer.getGithub()}" target=_blank">${engineer.getGithub()}</a></li>
                                </ul>
                            </div>
                            `;
            })
            .join("")}
            </section>
            <section>
                ${employeeArr
            .filter(employee => employee.school)
            .map(info => {
                const intern = new Intern(info.name, info.id, info.email, info.school);
                return `
                            <div class="employee-card">
                                <h2>${intern.getName()}</h2>
                                <h3>${intern.getRole()}</h3>
                                <hr>
                                <ul>
                                    <li>ID: ${intern.getId()}</li>
                                    <li>Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
                                    <li>School: ${intern.getSchool()}</li>
                                </ul>
                            </div>
                            `;
            })
            .join("")}
            </section>
        </main>

        <footer class="container text-center py-3">
            <h3>&copy; ${new Date().getFullYear()} Team Profile Generator</h3>
        </footer>
    </body>
    </html>
    `
    writeFile(htmlContent);
    copyFile();
};
module.exports = generateHTML;