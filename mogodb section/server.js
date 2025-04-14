const { MongoClient } = require("mongodb");
const DB_URL="mongodb://localhost:27017"
const DB_NAME="mongo-tutorial"
const client= new MongoClient(DB_URL)
async function main() {
    await client.connect()
    console.log(" connection to mongodb");
    const db=client.db(DB_NAME)
    const userCollection=db.collection("user")

}
main() 