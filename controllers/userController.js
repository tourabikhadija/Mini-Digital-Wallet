const users = require("../data/users");

// afficher tous les utilisateurs
const getUsers = (req, res) => {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(users));
};

// ajouter un utilisateur
const postUser = (req, res) => {
    let body = "";

    req.on("data", chunk => body += chunk.toString());
    req.on("end", () => {
        const newUser = JSON.parse(body);
        users.push(newUser);

        res.writeHead(201, { "Content-Type": "application/json" });
        res.end(JSON.stringify(newUser));
    });
};

// mettre à jour un utilisateur (PUT /users?id=1)
const putUser = (req, res) => {
    const id = req.userId; // جينا من query string
    const index = users.findIndex(u => u.id === id);

    if (index === -1) {
        res.writeHead(404, { "Content-Type": "application/json" });
        return res.end(JSON.stringify({ message: "User not found" }));
    }

    let body = "";
    req.on("data", chunk => body += chunk.toString());
    req.on("end", () => {
        const updatedUser = JSON.parse(body);
        users[index] = { ...users[index], ...updatedUser };

        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(users[index]));
    });
};

// supprimer un utilisateur (DELETE /users?id=1)
const deleteUser = (req, res) => {
    const id = req.userId; // جينا من query string
    const index = users.findIndex(u => u.id === id);

    if (index === -1) {
        res.writeHead(404, { "Content-Type": "application/json" });
        return res.end(JSON.stringify({ message: "User not found" }));
    }

    users.splice(index, 1);
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "User deleted" }));
};

module.exports = { getUsers, postUser, putUser, deleteUser };