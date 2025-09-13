//in folder, create package.json using npm init -y command, then add file index.js manually
//u can also include in scripts -> "start" :"nodemon index.js" => so instread of using nodemon index.js , u can use npm start to run changes
// Import http module
const http = require("http");

// Create server
const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello, World! This is my Node.js server.");
});

// Start server
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`); //http://localhost:3000/
});
