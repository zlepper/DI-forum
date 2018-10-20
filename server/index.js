
var thread = require("./thread")
const express = require('express')
const bodyExpress = require('body-parser')
const app = express()
const port = 3000




app.use(bodyExpress.urlencoded({extended:false}));
app.use(bodyExpress.json());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

thread.addThreadHandler(app);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))