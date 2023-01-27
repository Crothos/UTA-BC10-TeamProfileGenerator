const starterQuestions = [
    {
    type: 'input',
    message: "What is your team manager's name?",
    name: 'managername',
    },
    {
    type: 'input',
    message: "What is your team manager's ID number?",
    name: 'managerId',
    },
    {
    type: 'input',
    message: "What is your team manager's email address?",
    name: 'managerEmail',
    },
    {
    type: 'input',
    message: "What is your team manager's office number?",
    name: 'managerOffice',
    },
    {
    type: 'checkbox',
    message: 'Which',
    name: 'license',
    choices: [
        'MIT', 'ISC','Unlicense', 'zLib',
    ],},

];


module.exports = starterQuestions;