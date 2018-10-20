var uuid = require("uuid/v4");

let obj = {};

exports.addThreadHandler = function(app) {


    app.get('/thread', (req, res, next) => res.send(JSON.stringify(obj)));

    app.post('/thread', (req, res, next) => {

        req.body.id = uuidv4();
        var threadName = req.body.threadName;
        console.log(threadName);
        obj = {
            "threadName": threadName
        };
        res.send(`message received ${threadName}`);
    });

}

