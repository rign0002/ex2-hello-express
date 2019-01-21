'use strict'


const http = require("http");


const requestHandler = (request, response) => {

    if (request.url === "/api") {

        const payload = {
            message: "Hello world from Node.js"
        }

        response.setHeader("Content-Type", "application/json");
        response.write(JSON.stringify({
            data: payload
        }));
    response.end();
} else {

    response.write("Hello world from node.js");

    response.end();
}
}

const server = http.createServer();
server.on("request", requestHandler);

server.listen(3030, err => {
    if (err) {
        return console.log("something bad happened", err);
    }

    console.log("server listening on port 3030...");
})
