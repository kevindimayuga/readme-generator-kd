// TODO: Include packages needed for this application

// fs package into const variable
const fs = require('fs');

// inquirer package into const variable
const inquirer = require('inquirer');

// markdown js file into const variable
const generateMarkdown = require('./Develop/utils/generateMarkdown')

// function to add license image to top of readme
function getLicense(value) {
    if (value === 'Apache 2.0') {
        return '[![License: Apache 2.0](https://img.shields.io/badge/License-Apache_2.0-blue)](https://www.apache.org/licenses/LICENSE-2.0)';
    } else if (value === 'GNU GPL v3.0') {
        return '[![License: GNU GPL v3.0](https://img.shields.io/badge/License-GNU_GPL_v3.0-blue)](https://www.gnu.org/licenses/gpl-3.0.en.html)';
    } else if (value === 'MIT') {
        return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow)](https://opensource.org/license/mit/)';
    }
}

// TODO: Create an array of questions for user input
const questions = [

    {
        type: 'input',
        name: 'title',
        message: 'What is the title of the project?',
    },

    {
        type: 'input',
        name: 'description',
        message: 'Please enter the project description here.',
    },

    {
        type: 'input',
        name: 'installation',
        message: 'What steps are taken in order to install the project?',
    },
    
    {
        type: 'input',
        name: 'usage',
        message: 'How will the user use the project/application?',
    },

    {
        type: 'list',
        name: 'license',
        message: 'Please choose one of the following licenses for the project.',
        choices: [
            'Apache 2.0',
            'GNU GPL v3.0',
            'MIT',
            'No license',
        ],
    },

    {
        type: 'input',
        name: 'contributions',
        message: 'How can users contribute to the project?',
    },

    {
        type: 'input',
        name: 'tests',
        message: 'What test instructions are there in order to test the project/application?',

    },

    {
        type: 'input',
        name: 'userName',
        message: 'What is your GitHub username?',
    },

    {
        type: 'input',
        name: 'userEmail',
        message: 'What is your email address?',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeToFile(fileName, generateMarkdown(data), function(err) {
        if (err) {
            return console.log(err);
        }
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((data => {
            console.log(JSON.stringify(data, null, ' '));
            data.getLicense = getLicense(data.license);
            writeToFile('./assets/images/README.md', data);
    }))
}

// Function call to initialize app
init();
