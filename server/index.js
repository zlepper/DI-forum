var posts = require("./posts")

const express = require('express')
var cors = require('cors')
var bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(cors())

const port = 3000

posts.addPostsHandler(app)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))