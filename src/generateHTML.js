const htmlBlock = [];


const generateHTML = (team) => {
    const generateCards = team => {

        for (let i = 0; i < team.length; i++) {
                if (team[i].getRole() === "Manager") {
                generateManager(team[i]);
                }
                if (team[i].getRole() === "Engineer") {
                generateEngineer(team[i]);
                }
                if (team[i].getRole() === "Intern") {
                generateIntern(team[i]);
                }
                console.log(htmlBlock);
                //htmlBlock.join("");
        }
    }
    generateCards(team);
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>My Team</title>
        <link rel="stylesheet" href="./style.css">
    </head>
    <body>
        <header id="header">My Team</header>
        <div id="cardcontainer">${htmlBlock.join("")}</div>
    </body>
    </html>
    `;
};

const generateManager = manager => {
    let managerBlock = `
    <div class="card">
    <img class="card-img-top" src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-glasses-outline-512.png" alt="Card image cap" style="width:50px;height:50px" >
    <div class="card-body">
        <h2>Manager</h2>
        <h3>Name: ${manager.name}</h3>
        <h3>Employee ID: ${manager.id}
        <h3>Email: <a href="mailto:${manager.email}">${manager.email}</a></h3>
        <h3>Office Number: ${manager.officeNumber}</h3>
    </div>
    </div>
    `;
    htmlBlock.push(managerBlock);
}

const generateEngineer = engineer => {
    let engineerBlock = `
    <div class="card">
    <img class="card-img-top" src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-glasses-outline-512.png" alt="Card image cap" style="width:50px;height:50px" >
    <div class="card-body">
        <h2>Engineer</h2>
        <h3>Name: ${engineer.name}</h3>
        <h3>Employee ID: ${engineer.id}
        <h3>Email: <a href="mailto:${engineer.email}">${engineer.email}</a></h3>
        <h3>GitHub Profile: ${engineer.github}</h3>
    </div>
    </div>
    `;
    htmlBlock.push(engineerBlock);
}

const generateIntern = intern => {
    let internBlock = `
    <div class="card">
    <img class="card-img-top" src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-glasses-outline-512.png" alt="Card image cap" style="width:50px;height:50px" >
    <div class="card-body">
        <h2>Intern</h2>
        <h3>Name: ${intern.name}</h3>
        <h3>Employee ID: ${intern.id}
        <h3>Email: <a href="mailto:${intern.email}">${intern.email}</a></h3>
        <h3>School: ${intern.school}</h3>
    </div>
    </div>
    `;
    htmlBlock.push(internBlock);
}

module.exports = generateHTML;