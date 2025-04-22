
const fs=require("fs")
const http=require("http")

// readstream=fs.createReadStream("./file.txt")
// writestream=fs.createWriteStream("./write.txt")


// readstream.pipe(writestream)


http.createServer(( req,res)=>{
const readstream=fs.createReadStream("./file.txt")
res.writeHead(200,{'Content-type':'text/plain'})
readstream.pipe(res)

}).listen(3000)
console.log("listen to port 3000 :http://localhost:3000");
