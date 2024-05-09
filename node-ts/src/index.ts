import http from "http";
import { userRouter } from "./routes/users";
import { handleNotFound } from "./not-found";
import { tasks } from "./routes/tasks";

let nextId = tasks.length + 1;

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
    } else if (url === "/tasks") {
      res.writeHead(200);
      res.end(JSON.stringify(tasks));
    } else {
      handleNotFound(res);
    }
  } else if (method === "POST" && url === "/tasks") {
    let body = "";
    // EventEmitter's function "on" ("once" - if you only want a listener to run once) adds a listener function for a specified event
    req.on("data", (chunk) => {
      body += chunk.toString();
    });
    req.on("end", () => {
      console.log("Raw request body:", body);
      // const task = tasks.find((task) => task.id.toString() === id)
      try {
        const parsedBody = JSON.parse(body);
        console.log("Parsed request body:", parsedBody);
        const { title } = JSON.parse(body);
        if (!title) {
          res.writeHead(400, { "Content-Type": "application/json" });
          res.end(JSON.stringify({ error: "Title is required" }));
          return;
        }
        const newTask = { id: nextId++, title: title, completed: false };
        tasks.push(newTask);
        res.writeHead(201, { "Content-Type": "application/json" });
        res.end(JSON.stringify(newTask));
      } catch (e) {
        console.error("Error parsing JSON:", e);
        res.writeHead(400, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ error: "Invalid JSON in request body" }));
      }
    });
  } else if (url?.startsWith("/tasks/") && method === "PUT") {
    const id = parseInt(url.split("/")[2]);
    const task = tasks.find((t) => t.id === id);
    if (task) {
      task.completed = true;
      res.writeHead(200);
      res.end(JSON.stringify(task));
    } else {
      res.writeHead(404);
      res.end("Task not found");
    }
  } else {
    handleNotFound(res);
  }
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
