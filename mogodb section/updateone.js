const { MongoClient, ObjectId } = require("mongodb");
const DB_URL = "mongodb://localhost:27017"
const DB_NAME = "mongo-tutorial"
const client = new MongoClient(DB_URL)
async function main() {
    await client.connect()
    console.log(" connection to mongodb");
    const db = client.db(DB_NAME)
    const userCollection = db.collection("user")


    // const user = await userCollection.updateOne(
    //     { _id: new ObjectId("6800b40ccfdd2ec1677ff118") },
    //     { $set: { firstName: "vahid" } }
    // );



    // const user = await userCollection.updateOne(
    //     { _id: new ObjectId("6800b40ccfdd2ec1677ff118") },
    //     { $push: { pasvand: "sead" } }
    // );


    // const user = await userCollection.updateOne(
    //     { _id: new ObjectId("6800b40ccfdd2ec1677ff118") },
    //     { $inc: { age: 1 } }
    // );


    const user = await userCollection.updateOne(
        { _id: new ObjectId("6800b40ccfdd2ec1677ff118") }, 
        { $rename: { sen: "age" } } 
    );
    console.log("Update result: ", user);
    



}
main()   