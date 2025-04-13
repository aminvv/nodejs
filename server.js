const http = require("http");
const productController = require("./controllers/product.controller");
const errorController = require("./controllers/error.controller");

const PORT = 3000;
const server = http.createServer((req, res) => {
    if (req.url === "/api" && req.method === "GET") {
        productController.get(req, res);
    } else if (req.url.match(/\/api\/[0-9]+/) && req.method === "GET") {
        productController.getById(req, res);
    } else if (req.url === "/api" && req.method === "POST") {
        productController.create(req, res);
    } else if (req.url.match(/\/api\/[0-9]+/) && req.method === "PUT") {
        productController.update(req, res);
    } else if (req.url.match(/\/api\/[0-9]+/) && req.method === "DELETE") {
        productController.remove(req, res);
    } else {
        errorController.errorHandler(res);
    }
});

server.listen(PORT, () => {
    console.log(`Server running on port: ${PORT} http://localhost:${PORT}`);
});
