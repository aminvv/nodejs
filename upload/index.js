const http = require("http")
const fs = require("fs")
const multiparty = require("multiparty")



const server = http.createServer((req, res) => {
    const { url, method } = req

    if (url == "/" && method == "POST") {
        let form= new multiparty.Form()
        form.parse(req)
        form.on('part',(part)=>{
            part.pipe(fs.createWriteStream(`./stream/${part.filename}`))
            .on("close",()=>{
                res.writeHead(200,{'content-type':'text/html'})
                res.end(`
                    <h1> file uploaded${part.filename} </h1>
                    `)
            })
        })
    } else {
        res.writeHead(200,{'content-type':'text/html'})
        res.end(`
            <form enctype="multipart/form-data" method="POST" action="/">
            <input type="file" name="upload-file">
            <button> Upload File</button>
            </form>
            `)
    }
})

server.listen(3000)
console.log(" listen to port 3000 :http://localhost:3000");
