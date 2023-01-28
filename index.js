const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');
const generateHTML = require('./src/generateHTML');
const fs = require('fs');
const team = [];

const startPrompt = () => {
    return inquirer.prompt([
        {
            type: 'input',
            message: "What is the team manager's name?",
            name: 'name',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Manager's name required!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            message: "What is your employee ID?",
            name: 'employeeId',
            validate: employeeId => {
                if (employeeId) {
                    return true;
                } else {
                    console.log("Employee ID is required!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            message: "What is your email address?",
            name: 'email',
            validate: email => {
                if (email) {
                    return true;
                } else {
                    console.log("Your email is required!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            message: "What is your office number?",
            name: 'officeNumber',
            validate: officeNumber => {
                if (officeNumber) {
                    return true;
                } else {
                    console.log("Your office number is required!");
                    return false;
                }
            }
        },
    ]).then(data => {
        const manager = new Manager(data.name, data.employeeId, data.email, data.officeNumber);
        team.push(manager);
        promptSelect();
    })
};

const promptSelect = () => {
    return inquirer.prompt([
        {
            type: 'list',
            message: 'Which role would you like to add to the team?',
            name: 'role',
            choices: ['Engineer', 'Intern', 'Team is complete']
        }
    ]).then(choices => {
        switch (choices.role) {
            case 'Engineer':
                promptEngineer();
                break;
            case 'Intern':
                promptIntern();
                break;
            default:
                buildTeam();
        }
    })
};

const promptEngineer = () => {
    return inquirer.prompt([
        {
            type: 'input',
            message: "What is your engineer's name?",
            name: "name",
            validate: engineerName => {
                if(engineerName) {
                    return true;
                } else {
                    console.log("Engineer name is required!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            message: "What is your engineer's employee ID?",
            name: 'employeeId',
            validate: employeeId => {
                if (employeeId) {
                    return true;
                } else {
                    console.log("Employee ID is required!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            message: "What is your engineer's email address?",
            name: 'email',
            validate: email => {
                if (email) {
                    return true;
                } else {
                    console.log("Email is required!")
                    return false;
                }
            }
        },
        {
            type: 'input',
            message: "What is your engineer's GitHub user name?",
            name: 'gitName',
            validate: gitName => {
                if (gitName) {
                    return true;
                } else {
                    console.log("GitHub username is required!");
                    return false;
                }
            }
        },
    ]).then (data => {
        const engineer = new Engineer(data.name, data.employeeId, data.email, data.gitName);
        team.push(engineer);
        promptSelect();
    })
};

const promptIntern = () => {
    return inquirer.prompt([
        {
            type: 'input',
            message: "What is your intern's name?",
            name: "name",
            validate: internName => {
                if(internName) {
                    return true;
                } else {
                    console.log("Intern name is required!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            message: "What is your intern's employee ID?",
            name: 'employeeId',
            validate: employeeId => {
                if (employeeId) {
                    return true;
                } else {
                    console.log("Employee ID is required!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            message: "What is your intern's email address?",
            name: 'email',
            validate: email => {
                if (email) {
                    return true;
                } else {
                    console.log("Email is required!")
                    return false;
                }
            }
        },
        {
            type: 'input',
            message: "What's the name of your intern's school?",
            name: 'school',
            validate: school => {
                if (school) {
                    return true;
                } else {
                    console.log("Intern's school is required!");
                    return false;
                }
            }
        },
    ]).then (data => {
        const intern = new Intern(data.name, data.employeeId, data.email, data.school);
        team.push(intern);
        promptSelect();
    })

};

function writeToFile(data) {
    console.log(data);
    fs.writeFile("customindex.html", generateHTML(team), err => console.log(err));
}

const buildTeam = () => {
    console.log(team);
    writeToFile();
}
startPrompt();