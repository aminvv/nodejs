const {MongoClient}=require('mongodb')


 class connectToMongoDb{
    #DB_URL="mongodb://localhost:27017/mongo-tutorial"
    #db=null
    async #connect(){
        try {
            let client=new MongoClient(this.#DB_URL)
            let db= client.db()
            return db
        } catch (error) {
            console.log(error);
            
        }
        
    }

    async Get(){
        try {
            if(this.#db){
                console.log(" db connection is already alive");
                return this.#db
            }
            this.#db=await this.#connect()
            return this.#db
        } catch (error) {
            console.log(error);
            
        }
    }



    
    
}


async function main(){
    const db=await  new connectToMongoDb().Get()
    const user=await db.collection('user'). find({}).toArray()
    console.log("user:---------->>>>>",user);
    
}

main()