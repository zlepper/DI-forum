const uuidv4 = require('uuid');

exports.subforumHandler= function(app) {
    var subforum = [];

    app.post('/subforums', (req, res) =>{
        req.body.id = uuidv4();
        subforum.push(req.body);
        console.log(req.body);
        res.json("stored object: " + req.body.title);

    });

    app.get('/subforums', (req, res) => {
        res.json(subforum);
    });
}