import http from "http";
import fs from "fs/promises";
import url from "url";
import path from "path";

const PORT = process.env.PORT;
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// res.writeHead(200, { "content-type": "application/json" });
//         res.end(JSON.stringify({ page: "Home Page" }));

const server = http.createServer(async (req, res) => {
  // res.setHeader("Content-Type", "text/html");

  console.log(req.url);
  console.log(req.method);

  try {
    if (req.method === "GET") {
      let filepath;
      if (req.url === "/") {
        filepath = path.join(__dirname, "public", "home.html");
      } else if (req.url === "/about") {
        filepath = path.join(__dirname, "public", "about.html");
      } else {
        throw new Error("Not Found");
      }

      const data = await fs.readFile(filepath);
      res.setHeader("Content-Type", "text/html");
      res.write(data);
      res.end();
    } else {
      throw new Error("Method not allowed");
    }
  } catch (err) {
    res.writeHead(500, { "content-type": "application/json" });
    res.end(JSON.stringify({ error: err.message }));
  }
});

server.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
