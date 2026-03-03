// routes/userRoutes.js
const { getUsers, postUser, putUser, deleteUser } = require("../controllers/userController");

function userRoutes(req, res) {

    if (req.url === "/users" && req.method === "GET") return getUsers(req, res);
    if (req.url === "/users" && req.method === "POST") return postUser(req, res);
    if (req.url.startsWith("/users") && req.method === "PUT") return putUser(req, res);
    if (req.url.startsWith("/users") && req.method === "DELETE") return deleteUser(req, res);

    return false; // route not found
}

module.exports = userRoutes;