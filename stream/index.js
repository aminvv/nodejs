 const fs=require("fs")

//  readstream=fs.CreateReadStream("./file.txt",'utf-8')  غیر اعدادی 
//  readstream=fs.CreateReadStream("./file.txt")
//  let counter=0
//  readstream.on('ready',()=>{
//     console.log("data ready to read  stream");
//  })
//  readstream.on('data',(chunk)=>{
//     counter++
//     console.log("###"+counter+ "---------chunk of  the data received");
//     console.log(chunk);
//  })
//  readstream.on('error',(error)=>{
//     console.log("get error  when  read  data");
//  })
//  readstream.on('end',()=>{
//     console.log("action of  read stream ended");
//  })






//  or



//  readstream=fs.CreateReadStream("./file.txt")
//  let counter=0
//  let buff=[]
//  readstream.on('ready',()=>{
//     console.log("data ready to read  stream");
//  })
//  readstream.on('data',(chunk)=>{
//     counter++
//     console.log("###"+counter+ "---------chunk of  the data received");
//     // console.log(chunk);
//     buff.push(chunk)
//  })
//  readstream.on('error',(error)=>{
//     console.log("get error  when  read  data");
//  })
//  readstream.on('end',()=>{
//     console.log("action of  read stream ended");
//     console.log(buff.toString());
    
//  })








// ####### write stream----------------




readstream=fs.createReadStream("./file.txt")
writestream=fs.createWriteStream("./write.txt")
 let counter=0
 readstream.on('ready',()=>{
    console.log("data ready to read  stream");
 })
 readstream.on('data',(chunk)=>{
    counter++
    console.log("###"+counter+ "---------chunk of  the data received");
    // console.log(chunk);
    writestream.write(chunk)
    
 })
 readstream.on('error',(error)=>{
    console.log("get error  when  read  data");
 })
 readstream.on('end',()=>{
    console.log("action of  read stream ended");
    
 })


 writestream.on("finish",()=>{
    console.log("writing data finished");
    
 })