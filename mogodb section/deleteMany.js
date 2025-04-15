const { MongoClient, ObjectId } = require("mongodb");
const DB_URL = "mongodb://localhost:27017"
const DB_NAME = "mongo-tutorial"
const client = new MongoClient(DB_URL)
async function main() {
    await client.connect()
    console.log(" connection to mongodb");
    const db = client.db(DB_NAME)
    const userCollection = db.collection("user")
    //result =userCollection.deleteOne({firstName:"hasan"})
    // result =userCollection.deleteOne({_id:new ObjectId("67fe247f831bef44228e1a94")})
    result =userCollection.deleteMany({"address.city":"urmia"})
    

    userCollection.countDocuments({}).then(count=>{
        console.log("count data.......>>>>",count);
        
    })


}
main()  