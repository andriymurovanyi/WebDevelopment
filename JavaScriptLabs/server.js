const http = require("http");

const server = http.createServer('request', (req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end("<h2>Hello, JS</h2>");
}).listen(3000, () => console.log("Server is working!"));


