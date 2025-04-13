const productModel = require("../models/product.model");

async function errorHandler( res) {
    res.writeHead(404,{'Content-Type':'application/json'})    
    res.write(JSON.stringify(
     {   message:" product not found"}
    ))
    res.end()

}
const errorController={
    errorHandler
}

module.exports=errorController