const { MongoClient, ObjectId } = require("mongodb");
const DB_URL = "mongodb://localhost:27017"
const DB_NAME = "mongo-tutorial"
const client = new MongoClient(DB_URL)
async function main() {
    await client.connect()
    console.log(" connection to mongodb");
    const db = client.db(DB_NAME)
    const userCollection = db.collection("user")
    // const users =await userCollection.find({}).toArray()
    // const users =await userCollection.find({firstName:"hasan"}).toArray()
    // const users =await userCollection.find({birthday:{$gte:new Date("10-10-2001")}}).toArray()
    // const users =await userCollection.find({"address.city":{$in:['urmia']}}).toArray()
    // console.log(" users.......>>>>",users);


    // ---------find() =====>>> .toArray()
    // ---------findOne() =====>>>  first Data in dataBase 


    const user =await userCollection.findOne({firstName:'hasan'})

        console.log(" user.......>>>>",user);



}
main()  