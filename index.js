const http = require("http");
const hostName = "127.0.0.1";
const PORT = 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader("Content-Type", "text/plain");
//   res.end("Hello World!\n");
// });

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.write('<h1 style="color: red">Hello World!</h1>');
  res.write("<p>I wonder what else we can send...</p>");
  res.end();
});

server.listen(PORT, hostName, () => {
  console.log(`Server running at http://${hostName}:${PORT}/`);
});
