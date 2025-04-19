 const productModel=require('../model/product.model.js')
 async function find(res, req) {
    try {
        const result = await productModel.find();
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.write(JSON.stringify(result));
        res.end();
    } catch (error) {
        console.log(error);
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.write(JSON.stringify({ message: 'Server error' }));
        res.end();
    }
}



async function FindOneId(res, req) {
    try {
        const id = req.url.split("/")[2];
        const result = await productModel.FindOneId(id);
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.write(JSON.stringify(result));
        res.end();
    } catch (error) {
        console.log(error);
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.write(JSON.stringify({ message: 'Server error' }));
        res.end();
    }
}


 async  function create(res,req) {
    try {
        
         let body=''
         req.on('data',(chunk)=>{
            body += chunk.toString()
         })

         req.on('end',async()=>{
            product={...JSON.parse(body),createAt:new Date()}
            result=await productModel.create(product)
            res.writeHead(201,{'Content-type':'application/json'})
            res.write(JSON.stringify(result))
            res.end()
         })
    } catch (error) {
        console.log(error);
        
    }
 }


 


 async  function update(res,req) {
    try {
        const id=req.url.split("/")[2]
         let body=''
         req.on('data',(chunk)=>{
            body += chunk.toString()
         })

         req.on('end',async()=>{
            product={...JSON.parse(body),createAt:new Date()}
            result=await productModel.update(id,product)
            res.writeHead(201,{'Content-type':'application/json'})
            res.write(JSON.stringify(result))
            res.end()
         })
    } catch (error) {
        console.log(error);
        
    }
 }



 
 async function remove(res, req) {
    try {
        const id = req.url.split("/")[2];
        const result = await productModel.remove(id);
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.write(JSON.stringify(result));
        res.end();
    } catch (error) {
        console.log(error);
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.write(JSON.stringify({ message: 'Server error' }));
        res.end();
    }
}




 const productController={
    find,
    FindOneId,
    create, 
    update,
    remove,
}
module.exports = productController