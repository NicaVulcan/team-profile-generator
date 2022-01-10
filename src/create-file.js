const fs = require("fs");

const writeFile = fileContent => {
    fs.writeFile("./dist/index.html", fileContent, (err) => {
        if (err) throw err;
        console.log("Your HTML file has been created");
    });
};

const copyFile = () => {
        fs.copyFile("./src/style.css", "./dist/style.css", err => {
            if (err) throw err;
            console.log("Your CSS file has been added. Please find both files in the dist/ directory!")
        });
};

module.exports = { writeFile, copyFile };