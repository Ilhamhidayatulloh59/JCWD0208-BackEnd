const http = require('http')
const PORT = 8000

const server = http.createServer( async (req, res) => {
    console.log(req)
    if (req.url === "/api" && req.method === "GET") {
        res.writeHead(200, { "Content-Type" : "application/json" })
        res.write("Hi there, this is a Vanila node.js API")
        res.end()
    } else {
        res.writeHead(404, { "Content-Type" : "application/json" })
        res.end(JSON.stringify( { "message": "Route not found"}))
    }
})

server.listen(PORT, () => {
    console.log(`Server started on port: ${PORT}`)
})
