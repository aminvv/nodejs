
const path = require('path');
const product=require ('../data/index.json')
const fs=require ('fs')



async function find(){
     return new Promise((resolve, reject) => {
         resolve(product)
     })
    
}



function getById(id) {
    return  new Promise((resolve, reject) => {
        resolve( product.find(product=> product.id == id))
    })
}


function update(id, payload) {
    return new Promise((resolve, reject) => {
        try {
            const filePath = path.join(__dirname, '../data/index.json')
            const data = JSON.parse(fs.readFileSync(filePath, 'utf8'))
            const updatedData = data.map(product => {
                if (product.id == id) {
                    Object.assign(product, payload)
                }
                return product;
            });

            fs.writeFileSync(filePath, JSON.stringify(updatedData, null, 2), 'utf8')
            resolve(updatedData.find(product => product.id == id))
        } catch (error) {
            reject(error)
        }
    });
}




function remove(id) {
    return new Promise((resolve, reject) => {
        try {
            const filePath = path.join(__dirname, '../data/index.json')
            const data = JSON.parse(fs.readFileSync(filePath, 'utf8'))
            const product=data.filter(product=>product.id !=id)
            fs.writeFileSync(filePath, JSON.stringify(product, null, 2), 'utf8')
            resolve()
        } catch (error) {
            reject(error)
        }
    });
}







function create(newProduct) {
    return new Promise((resolve, reject) => {
        try {

            const filePath = path.join(__dirname, '../data/index.json')
            const existingData = JSON.parse(fs.readFileSync(filePath, 'utf8'))
            
            existingData.push(newProduct);

            fs.writeFileSync(filePath, JSON.stringify(existingData, null, 2), 'utf8');

            resolve(newProduct)
        } catch (error) {
            reject(error)
        }
    });
}


const productModel={
    find,
    getById,
    create,
    update,
    remove,
}
module.exports=productModel 