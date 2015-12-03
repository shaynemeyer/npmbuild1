var app = module.exports = require("koa")();

app.use(function *() {
  this.body = "Koa says Hi!";
});

var port = process.env.PORT || (process.argv[2] || 3000);
port = (typeof port === "number") ? port : 3000;

if(!module.parent){ app.listen(port);}

console.log("Application started. Listening on port: " + port);

// had a bug. this fixed it
// http://www.marcusoft.net/2015/10/eaddrinuse-when-watching-tests-with-mocha-and-supertest.html
