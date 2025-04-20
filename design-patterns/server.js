const http = require('http');
const productController = require('./controllers/product.controller.js')

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;

    if (url === '/products' && method === 'GET') {
        productController.find(res, req)
    } else if (url.startsWith('/products') && method === 'GET') {
        productController.FindOneId(res, req);
    } else if (url === '/products/' && method === 'POST') {
        productController.create(res, req)
    } else if (url.startsWith('/products/') && method === 'PUT') {
        productController.update(res, req)
    } else if (url.startsWith('/products/') && method === 'DELETE') {
        productController.remove(res, req)
    } else {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: 'Route not found' }));
    }
});


const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
