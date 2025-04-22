const http = require("http");
const { createReadStream, statSync } = require("fs");
const fileName = "./rani.mp4";

http.createServer((req, res) => {
    const { size } = statSync(fileName);
    const range = req.headers.range;

    if (range) {
        let [start, end] = range.replace(/bytes=/, '').split("-");
        start = parseInt(start, 10);
        end = end ? parseInt(end, 10) : size - 1;

        res.writeHead(206, {
            'Content-Range': `bytes ${start}-${end}/${size}`,
            'Accept-Ranges': 'bytes',
            'Content-Length': end - start + 1,
            'Content-Type': 'video/mp4'
        });
        createReadStream(fileName, { start, end }).pipe(res);
    } else {
        res.writeHead(200, {
            'Content-Length': size,
            'Content-Type': 'video/mp4'
        });
        createReadStream(fileName).pipe(res);
    }
}).listen(3000);

console.log('Listening to port 3000: http://localhost:3000');
