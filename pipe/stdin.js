
const fs=require("fs")
const http=require("http")



const writestream=fs.WriteStream("./write.txt")
process.stdin.pipe(writestream)
