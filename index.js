const inquirer = require("inquirer");

// Title
let getProjectTitle = async function() {
    let projectTitle = await inquirer.prompt(
        [
            {
                name: 'title',
                type: 'input',
                message: "What is the title of your project?",
            }
        ]
    )
    console.log(projectTitle);
    getProjectDescription();
}

// Description
let getProjectDescription = async function() {
    let projectDescription = await inquirer.prompt(
        [
            {
                name: 'description',
                type: 'input',
                message: "Enter your project's description.",
            }
        ]
    )
    console.log(projectDescription);
    getInstallationInstructions();
}

// Installation Instructions
let getInstallationInstructions = async function() {
    let installationInstructions = await inquirer.prompt(
        [
            {
                name: 'installation instructions',
                type: 'input',
                message: "Enter any installation instructions for your project.",
            }
        ]
    )
    console.log(installationInstructions);
    getUsageInformation();
}

// Usage
let getUsageInformation = async function() {
    let usageInformation = await inquirer.prompt(
        [
            {
                name: 'usage information',
                type: 'input',
                message: "Enter your project's usage information.",
            }
        ]
    )
    console.log(usageInformation);
    getLicense();
}

// License
let getLicense = async function() {
    let license = await inquirer.prompt(
        [
            {
                name: 'license',
                type: 'list',
                message: 'What license are you using for your project?',
                choices: ['MIT License', 'Apache License', 'GPLv3 License', 'Mozilla Public License 2.0', 'BSD 3-Clause License']
            }
        ]
    )
    console.log(license);
    getCredits();
}

// Credits
let getCredits = async function() {
    let credits = await inquirer.prompt(
        [
            {
                name: 'credits',
                type: 'input',
                message: "Enter any credits for outside sources that helped you create your project.",
            }
        ]
    )
    console.log(credits);
    getTestInstructions();
}

// Test Instructions
let getTestInstructions = async function() {
    let testInstructions = await inquirer.prompt(
        [
            {
                name: 'test instructions',
                type: 'input',
                message: "Enter any testing instructions for your project.",
            }
        ]
    )
    console.log(testInstructions);
    getGitHubUsername();
}

// Questions
let getGitHubUsername = async function() {
    let gitHubUsername = await inquirer.prompt(
        [
            {
                name: 'GitHub username',
                type: 'input',
                message: "Enter your GitHub username.",
            }
        ]
    )
    console.log(gitHubUsername);
}


// Table of Contents
// Description, Installation Instructions, Usage, License, Credits, Test Instructions, and Questions


// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
getProjectTitle();