function generateHTML(team) {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>My Team</title>
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <header id = "header">${team[0].name}'s Team</header>
        <div id = "cardcontainer">
            
        </div>
    </body>
    </html>
    `;
};

module.exports = generateHTML;