// routes/userRoutes.js
const { getUsers, postUser, putUser, deleteUser } = require("../controllers/userController");

function userRoutes(req, res) {


    // console.log("Incoming request:", req.method, url);
    if (req.url === "/users" && req.method === "GET") {
        getUsers(req, res);
        return true;
    }

    if (req.url  === "/users" && req.method === "POST") {
        postUser(req, res);
        return true;
    }
    if (req.url  === "/users" && req.method === "PUT") {
        putUser(req, res);
        return true;
    }
    if (req.url === "/users" && req.method === "DELETE") {
        deleteUser(req, res);
        return true;   
    }

    return false;
}

module.exports = userRoutes;