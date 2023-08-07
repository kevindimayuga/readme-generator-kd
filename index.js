// TODO: Include packages needed for this application

// fs package into const variable
const fs = require('fs');

// inquirer package into const variable
const inquirer = require('inquirer');

// markdown js file into const variable
const generateMarkdown = require('./Develop/utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeToFile(fileName, generateMarkdown(data), function(err){
        if (err) {
            return console.log(err);
        }
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((data => {
        console.log(JSON.stringify(data, null, ' '));
        data.getLicense = getLicense(data.license);
        // writeToFile
    }))
}

// Function call to initialize app
init();
