const generateHTML = team => {
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
        <div id="cardcontainer">${generateManager(team)}</div>
    </body>
    </html>
    `;
};
const generateManager = team => {
    return `
    <div class="card">
    <img class="card-img-top" src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-glasses-outline-512.png" alt="Card image cap" style="width:50px;height:50px" >
    <div class="card-body">
        <h2>Manager</h2>
        <h3>Name: ${team[0].name}</h3>
        <h3>Employee ID: ${team[0].id}
        <h3>Email: <a href="mailto:${team[0].email}">${team[0].email}</a></h3>
        <h3>Office Number: ${team[0].officeNumber}</h3>
    </div>
    </div>
    `;
}
module.exports = generateHTML;