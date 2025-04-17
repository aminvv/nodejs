const { MongoClient, ObjectId } = require("mongodb");
const DB_URL = "mongodb://localhost:27017"
const DB_NAME = "mongo-tutorial"
const client = new MongoClient(DB_URL)
async function main() {
    await client.connect()
    console.log(" connection to mongodb");
    const db = client.db(DB_NAME)
    const userCollection = db.collection("user")



    // const user =await userCollection.find({},{projection:{firstName:0}}).toArray()
    // const user =await userCollection.find({},{limit:2}).toArray()
    // const user =await userCollection.find({},{skip:4}).toArray()
    // const user =await userCollection.find({},{sort:{birthday:-1}}).toArray()
    const user =await userCollection.find({},{sort:{_id:-1}}).toArray()

        console.log(" user.......>>>>",user);



}
main()  