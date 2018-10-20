var uuid = require("uuid/v4");

let obj = {};

exports.addThreadHandler = function(app) {
    var threads = [];

    app.get('/thread', (req, res, next) => res.json(threads));

    app.post('/thread', (req, res, next) => {

        req.body.id = uuid();
        var threadName = req.body.threadName;
        console.log(threadName);
        threads.push(req.body);
        res.send(`message received ${threadName}`);
    });

}

