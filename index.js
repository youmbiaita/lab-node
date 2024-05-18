const http = require("http");
const hostName = "127.0.0.1";
const PORT = 3000;

// Define route
//  app.get("/", (req, res) =>{
//   res.send("<h1>Welcome to the default route</h1>")
//  });

//  app.get("/greet/:name", (req, res) =>{
//   const name = req.params.name;
//   res.send(`<h1>Hello, ${name}!</h1><p>Welcome to our website, ${name}</p>`)
//  });

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader("Content-Type", "text/plain");
//   res.end("Hello World!\n");
// });

// app.get('/json', (req, res) => {
//   const data = {
//       message: "Hello, this is a JSON response!",
//       status: "success",
//       timestamp: new Date()
//   };
//   res.json(data);
// });

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader("Content-Type", "text/html");
//   res.write('<h1 style="color: red">Hello World!</h1>');
//   res.write("<p>I wonder what else we can send...</p>");
//   res.end();
// });

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/greet/");
    res.write('<h1 style="color: red">Hello World!</h1>\n');
  res.write("<p>Welcome to our website...</p>");
  res.end();
});

server.listen(PORT, hostName, () => {
  console.log(`Server running at http://${hostName}:${PORT}/`);
});
