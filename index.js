// variables for the npm modules used
const inquirer = require('inquirer');
const fileSystem = require('fs');

// function that handles all the prompts and user input
let initializePrompting = function() {                          // WHEN the initializePrompting function is called
    // Title prompt
    let getProjectTitle = async function() {                                                                                                                                        // WHEN the getProjectTitle function is called
        let projectTitle = await inquirer.prompt(                                                                                                                                   // THEN the projectTitle will be saved when entered
            [
                {
                    name: 'title',
                    type: 'input',
                    message: "What is the title of your project?",
                }
            ]
        )

        if (projectTitle.title === '') {                                                                                                                                            // IF the project title is left empty
            projectTitle.title = 'Untitled project';                                                                                                                                // THEN it will be titled "untitled project"
        }

        getProjectDescription(projectTitle);                                                                                                                                        // THEN the user is prompted to enter their project description
    }

    getProjectTitle();                                          // THEN the user is prompted to enter their project title

    // Description prompt
    let getProjectDescription = async function(projectTitle) {                                                                                                                      // WHEN the getProjectDescription function is called
        let projectDescription = await inquirer.prompt(                                                                                                                             // THEN the projectDescription will be saved when entered
            [
                {
                    name: 'description',
                    type: 'input',
                    message: "Enter your project's description.",
                }
            ]
        )

        if (projectDescription.description === '') {                                                                                                                                // IF the project description is left empty
            projectDescription.description = 'N/A';                                                                                                                                 // THEN the description will be set to "N/A"
        }

        getInstallationInstructions(projectTitle, projectDescription);                                                                                                              // THEN the user is prompted to enter their installation instructions
    }

    // Installation Instructions prompt
    let getInstallationInstructions = async function(projectTitle, projectDescription) {                                                                                            // WHEN the getInstallationInstructions function is called
        let installationInstructions = await inquirer.prompt(                                                                                                                       // THEN the installationInstructions will be saved when entered
            [
                {
                    name: 'installation',
                    type: 'input',
                    message: "Enter any installation instructions for your project.",
                }
            ]
        )

        if (installationInstructions.installation === '') {                                                                                                                         // IF the installation instructions are left empty
            installationInstructions.installation = 'N/A';                                                                                                                          // THEN the installation instructions will be set to "N/A"
        }

        getUsageInformation(projectTitle, projectDescription, installationInstructions);                                                                                            // THEN the user is prompted to enter their usage information
    }

    // Usage prompt
    let getUsageInformation = async function(projectTitle, projectDescription, installationInstructions) {                                                                          // WHEN the getUsageInformation function is called
        let usageInformation = await inquirer.prompt(                                                                                                                               // THEN the usageInformation will be saved when entered
            [
                {
                    name: 'usage',
                    type: 'input',
                    message: "Enter your project's usage information.",
                }
            ]
        )

        if (usageInformation.usage === '') {                                                                                                                                        // IF the usage information is left empty
            usageInformation.usage = 'N/A';                                                                                                                                         // THEN the usage information will be set to "N/A"
        }

        getLicense(projectTitle, projectDescription, installationInstructions, usageInformation);                                                                                   // THEN the user is prompted to enter their license
    }

    // License prompt
    let getLicense = async function(projectTitle, projectDescription, installationInstructions, usageInformation) {                                                                 // WHEN the getLicense function is called
        let license = await inquirer.prompt(                                                                                                                                        // THEN the license will be saved when entered
            [
                {
                    name: 'license',
                    type: 'list',
                    message: 'What license are you using for your project?',
                    choices: ['MIT License', 'Apache License', 'GPLv3 License', 'Mozilla Public License 2.0', 'BSD 3-Clause License']
                }
            ]
        )
        if (license.license === 'MIT License') {                                                                                                                                    // IF the MIT License is selected
            license.badge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';                                          // THEN a badge property will be created for it
        } else if (license.license === 'Apache License') {                                                                                                                          // IF the Apache License is selected
            license.badge = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';                                   // THEN a badge property will be created for it
        } else if (license.license === 'GPLv3 License') {                                                                                                                           // IF the GPLv3 License is selected
            license.badge = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';                                      // THEN a badge property will be created for it
        } else if (license.license === 'Mozilla Public License 2.0') {                                                                                                              // IF the Mozilla Public License 2.0 is selected
            license.badge = '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'                          // THEN a badge property will be created for it
        } else {                                                                                                                                                                    // IF the BSD 3-Clause License is selected
            license.badge = '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)'                               // THEN a badge property will be created for it
        }

        getCredits(projectTitle, projectDescription, installationInstructions, usageInformation, license);                                                                          // THEN the user is prompted to enter their credits
    }

    // Credits prompt
    let getCredits = async function(projectTitle, projectDescription, installationInstructions, usageInformation, license) {                                                        // WHEN the getCredits function is called
        let credits = await inquirer.prompt(                                                                                                                                        // THEN the credits will be saved when entered
            [
                {
                    name: 'credits',
                    type: 'input',
                    message: "Enter any credits for outside sources that helped you create your project.",
                }
            ]
        )

        if (credits.credits === '') {                                                                                                                                               // IF the credits are left empty
            credits.credits = 'N/A';                                                                                                                                                // THEN the credits will be set to "N/A"
        }

        getTestInstructions(projectTitle, projectDescription, installationInstructions, usageInformation, license, credits);                                                        // THEN the user is prompted to enter their test instructions
    }

    // Test Instructions prompt
    let getTestInstructions = async function(projectTitle, projectDescription, installationInstructions, usageInformation, license, credits) {                                      // WHEN the getTestInstructions function is called
        let testInstructions = await inquirer.prompt(                                                                                                                               // THEN the test instructions will be saved when entered
            [
                {
                    name: 'testing',
                    type: 'input',
                    message: "Enter any testing instructions for your project.",
                }
            ]
        )

        if (testInstructions.testing === '') {                                                                                                                                      // IF the test instructions are left empty
            testInstructions.testing = 'N/A';                                                                                                                                       // THEN the test instructions will be set to "N/A"
        }

        getGitHubUsername(projectTitle, projectDescription, installationInstructions, usageInformation, license, credits, testInstructions);                                        // THEN the user is prompted to enter their GitHub Username
    }

    // GitHub username prompt
    let getGitHubUsername = async function(projectTitle, projectDescription, installationInstructions, usageInformation, license, credits, testInstructions) {                      // WHEN the getGitHubUsername function is called
        let gitHubUsername = await inquirer.prompt(                                                                                                                                 // THEN the username will be saved when entered
            [
                {
                    name: 'GitHub',
                    type: 'input',
                    message: "Enter your GitHub username.",
                }
            ]
        )

        getEmailAddress(projectTitle, projectDescription, installationInstructions, usageInformation, license, credits, testInstructions, gitHubUsername);                          // THEN the user is prompted to enter their email address
    }

    // Email address prompt
    let getEmailAddress = async function(projectTitle, projectDescription, installationInstructions, usageInformation, license, credits, testInstructions, gitHubUsername) {        // WHEN the getEmailAddress function is called
        let email = await inquirer.prompt(                                                                                                                                          // THEN the email address will be saved when entered
            [
                {
                    name: 'email',
                    type: 'input',
                    message: "Enter your email address.",
                }
            ]
        )

        generateREADME(projectTitle, projectDescription, installationInstructions, usageInformation, license, credits, testInstructions, gitHubUsername, email);                    // THEN a README will be generated with all of the information inputted by the user
    }
}

// function to generate the README
let generateREADME = function (projectTitle, projectDescription, installationInstructions, usageInformation, license, credits, testInstructions, gitHubUsername, email) {           // WHEN the generateREADME function is called
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
`                                                                                                                                                                                   // THEN the content within the README is set to everything entered by the user
fileSystem.writeFile('./generatedREADMEs/README.md', READMEcontent, (err) => err ? console.error("your README was not generated") : console.log("your README was generated!"));     // THEN the README file is created
}

// function to initialize the prompts when the file is run
initializePrompting();