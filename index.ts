import Express from 'express'
const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.port || 3000

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false})) // middleware to parse x-www-form-urlencoded

app.listen(port, () => {
  console.log(`app running at : http://localhost:${port}`)
})