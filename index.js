const http = require("node:http");

const server = http.createServer((req, res) => {

    if (req.url === "/hello") {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("Hello, Node.js Server!");
    } 
    else if (req.url === "/goodbye") {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("Goodbye!");
    } 
    else if (req.url === "/greet") {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("Welcome to your first Node.js server!");
    } 
    else {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("404 - Not Found");
    }

});

server.listen(3000, () => {
    console.log("Server running on port 3000");
});