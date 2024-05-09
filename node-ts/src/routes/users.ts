import { IncomingMessage, ServerResponse } from "http";
import { handleNotFound } from "../not-found";

export const users = [
  {
    id: 1,
    name: "Alice",
  },
  {
    id: 2,
    name: "Bob",
  },
];

export function userRouter(req: IncomingMessage, res: ServerResponse): void {
  const { pathname } = new URL(req.url || "/", `http://${req.headers.host}`);
  if (pathname === "/info") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(users));
  } else {
    // handle /info/:id
    const urlParts = req.url!.split("/");
    const id = urlParts[2];

    const user = users.find((user) => user.id.toString() === id);

    if (!user) {
      handleNotFound(res);
    } else {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(user));
    }
  }
}
