const { ObjectId } = require('bson')
const ConnectToMongoDb = require('../utils/mongodb-connection.js')

const productCollection = "product"
async function find(){
    const db = await new ConnectToMongoDb().Get()
    const products = await db.collection(productCollection).find({}).toArray();
    return products;
}



async function FindOneId(id) {
    const db = await new ConnectToMongoDb().Get()
    return new Promise(async (resolve, reject) => {
        const product = await db.collection(productCollection).findOne({ _id: new ObjectId(id) })
        resolve(product)
    })
}


async function create(product) {
    const db = await new ConnectToMongoDb().Get()
    return new Promise(async (resolve, reject) => {
        const result = await db.collection(productCollection).insertOne(product)
        resolve(result)
    })
}



async function update(id, payload) {
    const db = await new ConnectToMongoDb().Get()
    return new Promise(async (resolve, reject) => {
        db.collection(productCollection).updateOne({_id: new ObjectId(id)}, {$set: {...payload}})
        resolve(result)
    })
}



async function remove(id) {
    const db = await new ConnectToMongoDb().Get()
    return new Promise(async (resolve, reject) => {
        const result = await db.collection(productCollection).deleteOne({ _id: new ObjectId(id) })
        resolve(result)
    })
}

const productModel = {
    find,
    FindOneId,
    create,
    update,
    remove,
}

module.exports = productModel