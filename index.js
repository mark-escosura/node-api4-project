require('dotenv').config()

const express = require('express');
const cors = require('cors')

const server = express()

server.use(express.json())
server.use(cors())

server.get('/api/users', (req, res) => {
    res.json([
        { id: 1, username: 'mark', password: 'GSksAs'},
        { id: 2, username: 'Jan', password: 'KwiQLk'},
        { id: 3, username: 'jay', password: 'AsDasF'}
    ])
})

server.use('*', (req, res)=>{
    res.send(`<h1> Welcome to User's API! </h1>`)
})

server.use((err, req, res, next)=>{ // eslint-disable line
    res.status(500).json({
        message: err.message,
        stack: err.stack,
    })
    })

// PORT
const PORT = process.env.PORT || 8080

server.listen(PORT, () => {
    console.log(`server listening on ${PORT}`);
})