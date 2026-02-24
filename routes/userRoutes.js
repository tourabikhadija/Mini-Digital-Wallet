// routes/userRoutes.js
const { getUsers, addUser } = require("../controllers/userController");

function userRoutes(req, res) {


    // console.log("Incoming request:", req.method, url);
    if (req.url === "/users" && req.method === "GET") {
        getUsers(req, res);
        return true;
    }

    if (req.url  === "/users" && req.method === "POST") {
        addUser(req, res);
        return true;
    }
    if (req.url === "/users" && req.method === "DELETE") {
        deleteUser(req, res);
        return true;   
    }

    return false;
}

module.exports = userRoutes;