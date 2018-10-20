
let obj = {};

exports.addThreadHandler = function(app) {

    app.get('/thread', (req, res, next) => res.send(JSON.stringify(obj)));

    app.post('/thread', (req, res, next) => {
        var threadName = req.body.threadName;
        console.log(threadName);
        obj = {
            "threadName": threadName
        };
        res.send(`message received ${threadName}`);
    });

}

