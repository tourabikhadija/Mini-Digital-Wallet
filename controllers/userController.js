// controllers/userController.js

const users = require("../data/users");

// afficher les utilisateurs
function getUsers(req, res) {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(users));
}

// ajouter utilisateur
function addUser(req, res) {
    let body = "";

    req.on("data", chunk => {
        body += chunk.toString();
    });

    
 

    req.on("end", () => {
        const newUser = JSON.parse(body);
        users.push(newUser);

        res.writeHead(201, { "Content-Type": "application/json" });
        res.end(JSON.stringify(newUser));
    });
}

module.exports = { getUsers, addUser };