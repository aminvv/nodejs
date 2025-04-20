const path=require("path")

// console.log( "mongodb"+ path.sep+"data"+path.sep+"users");   ------>>>   /  /   /
// console.log( "mongodb"+ path.delimiter+"data"+path.delimiter+"users"); ------->>>>>   ;   ;   ;
// console.log(  path.basename("mongodb/data/users/server.html"));  ---->>>>    server.html
// console.log(  path.basename("mongodb/data/users/server.html",".html"));  ---->>>>    server
// console.log(  path.extname("mongodb/data/users/server.html",".html")); ----->>>    .html
// console.log(  path.dirname("mongodb/data/users/server.html"));  ------>>>>      mongodb/data/users
