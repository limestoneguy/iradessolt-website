const express = require("express");
const compression = require('compression')
const http = require("http");
const path = require("path");
const fs = require("fs");
const app = express();
const port = 80;

app.use(express.static(path.join(__dirname, "build")));
app.use(compression());

app.get("*", (req, res) => {

  const statisFilePath = path.resolve(__dirname + `/build/${req.url}`);

  if (fs.existsSync(statisFilePath)) {
    res.sendFile(statisFilePath);
  } else res.sendFile(path.resolve(__dirname + "/build/index.html"));
});

const server = http.createServer(app);

server.listen(port, () => {
  console.log(`server started on port ${port}`);
});
