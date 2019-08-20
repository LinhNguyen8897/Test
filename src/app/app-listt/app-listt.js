const http = require("http");
const url = require("url");

const movies = require("../data.json");

const server = http.createServer((req, res) => {
  const parseUrl = url.parse(req.url, true);
  const path = parseUrl.pathname;

  const trimmePath = path.replace(/^\/+|\/+$/g, "");

  const method = req.method.toLocaleUpperCase();

  if(trimmePath === "movies" && method === 'GET'){
    res.statusCode = 200;
    res.setHeader('Content-Type', 'applicaiton/json');
    res.end(JSON.stringify(movies));
  }
  else{
    res.statusCode = 404;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify('not found'));
  }
});

server.listen(3000, err => {
  console.log("connect to port 3000 successfully");
});
