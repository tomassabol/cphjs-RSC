import { createServer } from "node:http";
import path from "path";
import { readFile } from "node:fs/promises";

const server = createServer(async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS"
  );
  res.setHeader("Access-Control-Allow-Headers", "*");

  if (req.url === "/api/cat-names") {
    const catFile = await readFile("./cats.txt", "utf-8");
    const catNames = catFile.split("\n");
    return res.end(JSON.stringify({ catNames }));
  }

  if (req.url === "/") {
    return res.end(`
        <!doctype html>
        <html lang="en">
            <head>
                <link rel="stylesheet" href="/styles.css"></link>
            </head>
            <body>
            <script src="/client.js"></script>
                <button onclick="onClick()">Reveal</button>
            </body>
        </html>
    `);
  }

  if (req.url === "/client.js") {
    const filePath = path.join(__dirname, "client.js");
    const file = await readFile(filePath, "utf-8");

    return res.end(file);
  }

  if (req.url === "/styles.css") {
    const filePath = path.join(__dirname, "styles.css");
    const file = await readFile(filePath, "utf-8");

    return res.end(file);
  }

  res.writeHead(404, { "Content-Type": "text/plain" });
  res.end("404 Not Found");
});

server.listen(3000, "127.0.0.1", () => {
  console.log("Listening on 127.0.0.1:3000");
});
