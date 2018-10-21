var uuid = require("uuid/v4");
let jsonRoutine = require("./jsonRoutine");

exports.addThreadHandler = function(app) {
    var threads = [];

    app.get('/thread', (req, res, next) => {
        var subforum = req.query.subforum;
        console.log("subforum: " + subforum)
        if(!typeof subforum === undefined ){
            const result = threads.filter(thread => thread.subforum === subforum);
            console.log("subforum stuff" + result)
;            res.json(result);
        } else {
            console.log("nonsubforum stuff")
            console.log(threads);
            res.json(threads);
        }
    });

    app.post('/thread', async (req, res, next) => {

        const threads = await jsonRoutine.loadJSON('threads.json');
        req.body.id = uuid();
        var threadName = req.body.threadName;
        console.log(`thread name ${threadName}`);
        threads.push(req.body);
        await jsonRoutine.overwrite(threads, 'threads.json')
        res.json(req.body);
    });

    app.get('/thread/:id', async (req, res) => {

        const threads = await jsonRoutine.loadJSON('threads.json');
        var threadId = req.params.id;

        console.log(threads);
        for (let i = 0; i < threads.length; i++){
            if (threadId == threads[i].id){
                res.json(threads[i]);
                return;
            }
        }
        res.sendStatus(404);
    });

};

