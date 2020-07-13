const PORT = 3000
const express = require('express')
const app = express()

app.get('/', (req, res) => res.sendFile(__dirname+"/index.html"))

app.listen(PORT, '0.0.0.0', () => console.log(`node service is listening on port ${PORT}!`))