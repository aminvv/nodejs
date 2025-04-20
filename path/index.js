const path=require("path")

// console.log( "mongodb"+ path.sep+"data"+path.sep+"users");   ------>>>   /  /   /
// console.log( "mongodb"+ path.delimiter+"data"+path.delimiter+"users"); ------->>>>>   ;   ;   ;
// console.log(  path.basename("mongodb/data/users/server.html"));  ---->>>>    server.html
// console.log(  path.basename("mongodb/data/users/server.html",".html"));  ---->>>>    server
// console.log(  path.extname("mongodb/data/users/server.html",".html")); ----->>>    .html
// console.log(  path.dirname("mongodb/data/users/server.html"));  ------>>>>      mongodb/data/users



// console.log(  path.join("mongodb/data/users/server.html")) ------>>>>>>>>   mongodb\data\users\server.html 
// console.log(  path.isAbsolute(path.join("/","mongodb/data/users/server.html")))  -------->>>>>>   true

// console.log(  path.parse("/mongodb/data/users/server.html"))  
//  --------->>>>>> 
// {
//     root: '/',
//     dir: '/mongodb/data/users',
//     base: 'server.html',
//     ext: '.html',
//     name: 'server'
//   }


// console.log(  path.normalize("C:\/mongodb/data////users/server.html"))  -------->>>>>>  C:\mongodb\data\users\server.html

// console.log(__dirname); -------->>>>>> C:\Users\aminv\OneDrive\Desktop\New folder\path
// console.log(__filename); ----------->>>>>>> C:\Users\aminv\OneDrive\Desktop\New folder\path\index.js






// #####          OS



// const os=require("os")

//  const currentOs={
//     name:os.type(),
//     arch:os.arch(),
//     platform:os.platform(),
//     release:os.release(),
//     version:os.version(),
//  }

//  console.log(currentOs);
//  console.log(os.uptime());
//  console.log(os.userInfo());
//  console.log(os.totalmem());
//  console.log(os.freemem());
 