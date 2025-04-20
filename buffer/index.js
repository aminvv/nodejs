//  const buff=Buffer.from("NodeJS")   حافظه به تعداد ورودی تصخیص داد شده
//  console.log(buff);
//  console.log(buff[0]);
//  console.log("N".codePointAt(0));
//  console.log("N".charCodeAt(0));
//  console.log("N".charCodeAt(0).toString(16));
//  console.log(buff.toString());




//  let buff=Buffer.alloc(4) 4 تصخیص داد شده
//  buff.write("Node")

//  buff[1]=110 ----->>>>>> Nnde

//  console.log(buff);
//  console.log(buff[0]);
//  console.log("N".codePointAt(0));
//  console.log("N".charCodeAt(0));
//  console.log("N".charCodeAt(0).toString(16));
//  console.log(buff.toString());
 
 

const buff=Buffer.from("NodeJS") 
console.log(buff.toJSON());
console.log(typeof buff);

const buff2=Buffer.from([ 78, 111, 100, 101, 74, 83 ],'hex') 
console.log(buff2.toString('utf-8'));
