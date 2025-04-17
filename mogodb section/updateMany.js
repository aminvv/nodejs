const { MongoClient, ObjectId } = require("mongodb");
const DB_URL = "mongodb://localhost:27017"
const DB_NAME = "mongo-tutorial"
const client = new MongoClient(DB_URL)
async function main() {
    await client.connect()
    console.log(" connection to mongodb");
    const db = client.db(DB_NAME)
    const userCollection = db.collection("user")





    // const user = await userCollection.updateMany(
    //     { firstName:"amin" }, 
    //     { $set: { age: 30 } } 
    // );



    //   findOneAndUpdate ==========>>>    1.first find first document ----->>>> 2.log----->>>>> 3.update document
    const user = await userCollection.findOneAndUpdate(
        { firstName:"amin" }, 
        { $set: { age: 31 } } 
    );
    console.log("Update result: ", user);
    



}
main()   