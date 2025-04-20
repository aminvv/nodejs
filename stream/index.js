 const fs=require("fs")

//  dataStream=fs.ReadStream("./file.txt",'utf-8')  غیر اعدادی 
//  dataStream=fs.ReadStream("./file.txt")
//  let counter=0
//  dataStream.on('ready',()=>{
//     console.log("data ready to read  stream");
//  })
//  dataStream.on('data',(chunk)=>{
//     counter++
//     console.log("###"+counter+ "---------chunk of  the data received");
//     console.log(chunk);
//  })
//  dataStream.on('error',(error)=>{
//     console.log("get error  when  read  data");
//  })
//  dataStream.on('end',()=>{
//     console.log("action of  read stream ended");
//  })






//  or



 dataStream=fs.ReadStream("./file.txt")
 let counter=0
 let buff=[]
 dataStream.on('ready',()=>{
    console.log("data ready to read  stream");
 })
 dataStream.on('data',(chunk)=>{
    counter++
    console.log("###"+counter+ "---------chunk of  the data received");
    // console.log(chunk);
    buff.push(chunk)
 })
 dataStream.on('error',(error)=>{
    console.log("get error  when  read  data");
 })
 dataStream.on('end',()=>{
    console.log("action of  read stream ended");
    console.log(buff.toString());
    
 })