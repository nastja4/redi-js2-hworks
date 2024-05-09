import { ServerResponse } from "http";

export function handleNotFound(res: ServerResponse): void {
  res.writeHead(404, { "Content-Type": "text/html" });
  res.end("<h1>Not found</h1>");
}
