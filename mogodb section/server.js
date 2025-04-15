const { MongoClient } = require("mongodb");
const DB_URL="mongodb://localhost:27017"
const DB_NAME="mongo-tutorial"
const client= new MongoClient(DB_URL)
async function main() {
    await client.connect()
    console.log(" connection to mongodb");
    const db=client.db(DB_NAME)
    const userCollection=db.collection("user")
    result =await userCollection.insertOne({
         firstName:"amin",
         lastName:"asadi",
         age:26,
         skills:["back-ens","NodeJs","Mongodb","Typescript","NestJs"],
         identity:'2741572496',
         birthday:new Date("09-09-1999"),
         address:{
            province:"azerbaijan",
            city:"urmia",
            street:"alamemajlesi"

         }
    })

}
main() 