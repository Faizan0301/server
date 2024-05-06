const fs = require('fs')
const http = require('http')
const port = "8080"

const reqHndler = (req, res) => {
    let fileName = ""
    switch (req.url) {
        case '/':
            fileName = './index.html'
            break;
        case '/about':
            fileName = './about.html'
            break;
        case '/contact':
            fileName = './contact.html'
            break;

        default:
            fileName = './error.html'
    }
    fs.readFile(fileName, (err, result) => {
        if (!err) {
            res.end(result);
        }
    })
}
const seraver = http.createServer(reqHndler)
seraver.listen(port, (err) => {
    if (err) {
        console.log("srver not start in port.");
        return false
    }
    console.log("server start in port" + port);
})