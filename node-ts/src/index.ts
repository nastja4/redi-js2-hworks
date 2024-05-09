import http from "http";
import { userRouter, users } from "./routes/users";
import { handleNotFound } from "./not-found";

const server = http.createServer((req, res) => {
  const { url, method } = req;
  if (method === "GET") {
    if (url === "/") {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end("<h1>Welcome to the Home page</h1>");
    } else if (url === "/about") {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end("<h1>About us</h1><p>This is the about page</p>");
    } else if (url?.startsWith("/info")) {
      userRouter(req, res);
    } else {
      handleNotFound(res);
    }
  } else {
    res.writeHead(400, { "Content-Type": "text/html" });
    res.end("<h1>400 Bad Request</h1><p>Only GET requests are allowed</p>");
  }
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
