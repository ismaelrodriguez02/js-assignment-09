const path = require('path')
const express = require('express')
const app = express()
const port = 3030
const jokes = require('./jokes.json')
const root = path.join(__dirname, 'public') 

app.use(express.json())
app.use(express.static('public'))

app.get('/',(request,response)=> {
    response.sendFile('index.html', {root})
})


app.get('/api/v1/random-joke',(request,response)=> {
    const r = Math.floor(Math.random() * 7)
    response.send(jokes[r])
})

app.listen(port, () => console.log(`Running on http://localhost:${port}`))