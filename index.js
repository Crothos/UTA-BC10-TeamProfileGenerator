const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');
const generateHTML = require('./lib/generateHTML');
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
            type: 'checkbox',
            message: 'Which role would you like to add to the team?',
            name: 'role',
            choices: ['Engineer', 'Intern', 'Team is complete']
        }
    ]).then(choice => {
        switch (choice.menu) {
            case "Engineer":
                promptEngineer();
                break;
            case "Intern":
                promptIntern();
                break;
            default:
                buildTeam();
        }
    })
};