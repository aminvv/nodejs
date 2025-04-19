const http = require('http');
const productController = require('./controllers/product.controller.js'); // مسیر فایل کنترلر

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;

    // مسیرها و درخواست‌ها
    if (url === '/products' && method === 'GET') {
        productController.find(res, req); // لیست محصولات
    } else if (url.startsWith('/products') && method === 'GET') {
        productController.FindOneId(res, req); // پیدا کردن محصول بر اساس ID
    } else if (url === '/products/' && method === 'POST') {
        productController.create(res, req); // ایجاد محصول جدید
    } else if (url.startsWith('/products/') && method === 'PUT') {
        productController.update(res, req); // به‌روزرسانی محصول
    } else if (url.startsWith('/products/') && method === 'DELETE') {
        productController.remove(res, req); // حذف محصول
    } else {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: 'Route not found' }));
    }
});

// تنظیم پورت سرور
const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
