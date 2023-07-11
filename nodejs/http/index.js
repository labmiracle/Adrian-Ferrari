const http = require("http");
const fs = require("fs");
require("dotenv").config();

const port = +process.env.PORT || 4000;
const host = process.env.HOST;

http
  .createServer((req, res) => {
    if (req.url === "/contact" && req.method === "GET") {
      fs.readFile(__dirname + "/vistas/contact.html", (err, data) => {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data);
        res.end();
      });
    } else if (req.url === "/location" && req.method === "GET") {
      fs.readFile(__dirname + "/vistas/location.html", (err, data) => {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data);
        res.end();
      });
    } else if (req.url === "/about" && req.method === "GET") {
      fs.readFile(__dirname + "/vistas/about.html", (err, data) => {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data);
        res.end();
      });
    } else if (req.url === "/" && req.method === "GET") {
      fs.readFile(__dirname + "/vistas/miraclelab.html", (err, data) => {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data);
        res.end();
      });
    } else {
      fs.readFile(__dirname + "/vistas/error.html", (err, data) => {
        res.writeHead(404, { "Content-Type": "text/html" });
        res.write(data);
        res.end();
      });
    }
  })
  .listen(port, host, console.log(`Listening on port ${port}`));
