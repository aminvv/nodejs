const { ObjectId } = require('bson')
const{connectToMongoDb} =require('../utils/mongodb-connection.js')

async function find(){
    const db=await new connectionToMongodb().Get()
    return new Promise(async(resolve,reject)=>{
        const products=await db.collection("product").find({}).toArray(
            resolve(products)
        )
    })
}



async function FindOneId(id){
    const db=await new connectToMongoDb().Get()
    return new Promise(async(resolve,reject)=>{
        const product=await db.collection("product").findOne({_id: new ObjectId(id)})
        resolve(product)
    })
}