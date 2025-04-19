const { MongoClient, ObjectId } = require("mongodb");
const DB_URL = "mongodb://localhost:27017"
const DB_NAME = "mongo-tutorial"
const client = new MongoClient(DB_URL)
async function main() {
    await client.connect()
    console.log(" connection to mongodb");
    const db = client.db(DB_NAME)
    const userCollection = db.collection("user")




    const user = await userCollection.aggregate([
        {
            $match: {
                firstName: "amin"
            }
        },
        {
            $addFields: {
                "userAge": "$age"
            }
        },
        {
            $project: {
                lastName: 0
            }
        },
    ]).toArray()

    console.log(" user.......>>>>", user);



}
main()  