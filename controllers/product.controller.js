const productModel = require("../models/product.model");

async function get(req, res) {
    try {
        const products = await productModel.find()
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.write(JSON.stringify(products))
        res.end()
    } catch (error) {

    }
}

async function getById(req, res) {
    const id = req.url.split("/")[2];
    const product = await productModel.getById(id);

    if (!product) {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.write(JSON.stringify({ message: "Product not found" }));
        return res.end();
    }

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.write(JSON.stringify(product));
    res.end();
}



async function update(req, res) {
    try {
        let body = '';
        const id = req.url.split("/")[2]; // استخراج آی‌دی از URL

        req.on('data', chunk => {
            body += chunk.toString(); // دریافت داده‌های کلاینت
        });

        req.on('end', async () => {
            const productData = JSON.parse(body); // تبدیل به JSON
            const product = await productModel.getById(id); // دریافت محصول

            if (!product) {
                res.writeHead(404, { 'Content-Type': 'application/json' });
                res.write(JSON.stringify({ message: "Product not found" }));
                return res.end();
            }

            const updatedProduct = await productModel.update(id, productData); // به‌روزرسانی محصول
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.write(JSON.stringify({ 
                message: "Update successfully", 
                product: updatedProduct 
            }));
            res.end();
        });
    } catch (error) {
        console.error(error);
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.write(JSON.stringify({ message: "Internal Server Error" }));
        res.end();
    }
}





async function remove(req,res) {
    try {
        const id = req.url.split("/")[2]




            const product = await productModel.getById(id)

            if (!product) {
                res.writeHead(404, { 'Content-Type': 'application/json' });
                res.write(JSON.stringify({ message: "Product not found" }));
                return res.end();
            }

            const result = await productModel.remove(id)
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.write(JSON.stringify({ 
                message: "delete successfully",
                result
            }));
            res.end();
       
    } catch (error) {
        console.error(error);
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.write(JSON.stringify({ message: "Internal Server Error" }));
        res.end();
    }
}




async function create(req, res) {
try {
    let body=''
    req.on('data',(chunk)=>{
        body+=chunk.toString()
    })
    
    req.on('end',async ()=>{
        const product={...JSON.parse(body)}
        await productModel.create(product);
        res.writeHead(201, { 'Content-Type': 'application/json' });
        res.write(JSON.stringify({
            message:"created successfully",
            product
        }));
        res.end();
    })
} catch (error) {
    console.log(error);
    
}
}




const productController={
    get,
    getById,
    create,
    update,
    remove
}

module.exports=productController