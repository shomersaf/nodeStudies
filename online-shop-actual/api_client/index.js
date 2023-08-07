const express = require("express")
const path = require("path")
const port = 5200
const app = express()

app.use(express.static("../react-client/dist"))

app.get("*", (req, res, next) => {
    res.sendFile(path.resolve(__dirname, "files/index.html"))
})

app.listen(port, () => {
    console.log(`Api Client is running on port ${port}`)
})
console.log("this is my client api - it will serve the static files")