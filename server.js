const http = require("http");

const userRoutes = require("./routes/userRoutes"); 

const server = http.createServer((req, res) => {
    const handled = userRoutes(req, res);

    if (!handled) {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("Route Not Found");
    }
});

server.listen(3000, () => {
    console.log("Mini Digital wallet running on http://localhost:3000");
});