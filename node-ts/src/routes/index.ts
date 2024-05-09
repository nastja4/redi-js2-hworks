import { IncomingMessage, ServerResponse } from "http";

export function handleIndex(req: IncomingMessage, res: ServerResponse) {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end("<h1>Welcome to the Home page</h1>");
}
