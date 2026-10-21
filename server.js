import http from "http";
const PORT = process.env.PORT;

const server = http.createServer((req, res) => {
  // res.setHeader("Content-Type", "text/html");

  console.log(req.url);
  console.log(req.method);

  try {
    if (req.method === "GET") {
      if (req.url === "/") {
        res.writeHead(200, { "content-type": "application/json" });
        res.end(JSON.stringify({ page: "Home Page" }));
      } else if (req.url === "/about") {
        res.writeHead(200, { "content-type": "application/json" });
        res.end(JSON.stringify({ page: "About Page" }));
      } else {
        res.writeHead(404, { "content-type": "application/json" });
        res.end(JSON.stringify({ page: "Not Found" }));
      }
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
