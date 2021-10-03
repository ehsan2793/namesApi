const express = require('express');
const nameRouter = require('../nameRouter/Router');

const server = express();

server.use(express.json())



server.get('/', (req, res) => {
    res.status(200).send("hello world")

})

server.use('/api/names', nameRouter)



module.exports = server