// variables for the npm modules used
const inquirer = require('inquirer');
const fileSystem = require('fs');

// function that handles all the prompts and user input
let initializePrompting = function() {
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

        if (projectTitle.title === '') {
            projectTitle.title = 'Untitled project';
        }

        getProjectDescription(projectTitle);
    }

    getProjectTitle();

    // Description
    let getProjectDescription = async function(projectTitle) {
        let projectDescription = await inquirer.prompt(
            [
                {
                    name: 'description',
                    type: 'input',
                    message: "Enter your project's description.",
                }
            ]
        )

        if (projectDescription.description === '') {
            projectDescription.description = 'N/A';
        }

        getInstallationInstructions(projectTitle, projectDescription);
    }

    // Installation Instructions
    let getInstallationInstructions = async function(projectTitle, projectDescription) {
        let installationInstructions = await inquirer.prompt(
            [
                {
                    name: 'installation',
                    type: 'input',
                    message: "Enter any installation instructions for your project.",
                }
            ]
        )

        if (installationInstructions.installation === '') {
            installationInstructions.installation = 'N/A';
        }

        getUsageInformation(projectTitle, projectDescription, installationInstructions);
    }

    // Usage
    let getUsageInformation = async function(projectTitle, projectDescription, installationInstructions) {
        let usageInformation = await inquirer.prompt(
            [
                {
                    name: 'usage',
                    type: 'input',
                    message: "Enter your project's usage information.",
                }
            ]
        )

        if (usageInformation.usage === '') {
            usageInformation.usage = 'N/A';
        }

        getLicense(projectTitle, projectDescription, installationInstructions, usageInformation);
    }

    // License
    let getLicense = async function(projectTitle, projectDescription, installationInstructions, usageInformation) {
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
        if (license.license === 'MIT License') {
            license.badge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
        } else if (license.license === 'Apache License') {
            license.badge = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
        } else if (license.license === 'GPLv3 License') {
            license.badge = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
        } else if (license.license === 'Mozilla Public License 2.0') {
            license.badge = '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'
        } else {
            license.badge = '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)'
        }

        getCredits(projectTitle, projectDescription, installationInstructions, usageInformation, license);
    }

    // Credits
    let getCredits = async function(projectTitle, projectDescription, installationInstructions, usageInformation, license) {
        let credits = await inquirer.prompt(
            [
                {
                    name: 'credits',
                    type: 'input',
                    message: "Enter any credits for outside sources that helped you create your project.",
                }
            ]
        )

        if (credits.credits === '') {
            credits.credits = 'N/A';
        }

        getTestInstructions(projectTitle, projectDescription, installationInstructions, usageInformation, license, credits);
    }

    // Test Instructions
    let getTestInstructions = async function(projectTitle, projectDescription, installationInstructions, usageInformation, license, credits) {
        let testInstructions = await inquirer.prompt(
            [
                {
                    name: 'testing',
                    type: 'input',
                    message: "Enter any testing instructions for your project.",
                }
            ]
        )

        if (testInstructions.testing === '') {
            testInstructions.testing = 'N/A';
        }

        getGitHubUsername(projectTitle, projectDescription, installationInstructions, usageInformation, license, credits, testInstructions);
    }

    // Questions
    let getGitHubUsername = async function(projectTitle, projectDescription, installationInstructions, usageInformation, license, credits, testInstructions) {
        let gitHubUsername = await inquirer.prompt(
            [
                {
                    name: 'GitHub',
                    type: 'input',
                    message: "Enter your GitHub username.",
                }
            ]
        )

        getEmailAddress(projectTitle, projectDescription, installationInstructions, usageInformation, license, credits, testInstructions, gitHubUsername);
    }

    let getEmailAddress = async function(projectTitle, projectDescription, installationInstructions, usageInformation, license, credits, testInstructions, gitHubUsername) {
        let email = await inquirer.prompt(
            [
                {
                    name: 'email',
                    type: 'input',
                    message: "Enter your email address.",
                }
            ]
        )

        generateREADME(projectTitle, projectDescription, installationInstructions, usageInformation, license, credits, testInstructions, gitHubUsername, email);
    }
}

// function to generate the README
let generateREADME = function (projectTitle, projectDescription, installationInstructions, usageInformation, license, credits, testInstructions, gitHubUsername, email) {
let READMEcontent = `
# ${projectTitle.title} ${license.badge}

## Table of Contents
* [Description](https://github.com/finntendoverse/msu-09-nodejs-challenge/tree/main/generatedREADMEs#description)
* [Installation Instructions](https://github.com/finntendoverse/msu-09-nodejs-challenge/tree/main/generatedREADMEs#installation-instructions)
* [Usage](https://github.com/finntendoverse/msu-09-nodejs-challenge/tree/main/generatedREADMEs#usage)
* [License](https://github.com/finntendoverse/msu-09-nodejs-challenge/tree/main/generatedREADMEs#license)
* [Credits](https://github.com/finntendoverse/msu-09-nodejs-challenge/tree/main/generatedREADMEs#credits)
* [Test Instructions](https://github.com/finntendoverse/msu-09-nodejs-challenge/tree/main/generatedREADMEs#test-instructions)
* [Questions?](https://github.com/finntendoverse/msu-09-nodejs-challenge/tree/main/generatedREADMEs#questions)

## Description
${projectDescription.description}

## Installation Instructions
${installationInstructions.installation}

## Usage
${usageInformation.usage}

## License
This application is covered under the ${license.license}.

## Credits
${credits.credits}

## Test Instructions
${testInstructions.testing}

## Questions?
Here's how you can get in contact with me to ask any questions!
* [Visit my GitHub](https://github.com/${gitHubUsername.GitHub})
* [Email me](mailto:${email.email})
`
fileSystem.writeFile('./generatedREADMEs/README.md', READMEcontent, (err) => err ? console.error("there was an error") : console.log("done!"));
}

// function to initialize the prompts
initializePrompting();