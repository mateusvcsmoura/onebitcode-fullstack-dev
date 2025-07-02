const http = require("node:http");

const server = http.createServer((request, response) => {
    const path = request.url;

    switch (path) {
        case "/":
            response.writeHead(200);
            response.write("You are at root page");
            break;
        case "/files":
            response.writeHead(200);
            response.write("You are at files page");
            break;
        default:
            response.writeHead(404);
            response.write("Not found");
            break;
    }

    response.end();
});

const PORT = 3000;

server.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
