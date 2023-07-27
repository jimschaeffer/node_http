// Import the http module
const http = require("http");
const PORT = 5001;

// Using the http module, call the createServer
// Pass in a request handler callback function to the createServer method that receives request and response objects as parameters
const server = http.createServer((req, res) => {
    const {url, method} = req;
    const dataArray = [];

    request.on("data", (data) => {
        dataArray.push(data);
    });

    // Add an event listener to the request object that listens for the ‘end’ event to be emitted from the ReadStream
    request.on("end", () => {
    // Set a new variable ‘body’ equal to Buffer.concat(array).toString()
        const body = Buffer.concat(dataArray).toString();

        if (url == "/"){
            res.writeHead(200, { "constant-type": "text/html"});
            res.write("<html><h1>The Darkness</h1><p>I Believe In a Thing Called Love</p></html>");
        } else if (url == "/about"){
            res.writeHead(200, { "content-type": "text/html"});
            res.write("<h1>About</h1>");
        } else if (url == "/echo" && method == "POST"){
            const responseObject = {method, url, body};
            res.writeHead(200, {"content-type": "application/json"});
            res.write(JSON.stringify(responseObject));
        } else {
            res.writeHead(404, {"content-type": "text/html"});
            res.write("Error: Page Not Found");
        }
        res.end();
    });

});

server.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});

// Write a conditional statement that assesses the request url, and responds appropriately:
    // ‘/’ - Wildcard. Respond with whatever information you wish
    // ‘/about’ - Respond with an object that has information about yourself
    // ‘/echo’ - Respond with an object that, a minimum, includes the request method, url and body.
// Make sure to end your response with .end()
// Set your server to listen on port 3000
// Initiate the file using the node.js CLI

// Finish setting up the server
