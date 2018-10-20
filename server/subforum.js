const uuidv4 = require('uuid');
const jsonRoutine = require('./jsonRoutine');

exports.subforumHandler= function(app) {

    app.post('/subforums', async (req, res) =>{
        const subforums = await jsonRoutine.loadJSON("subforums.json");

        req.body.id = uuidv4();
        subforums.push(req.body);
        await jsonRoutine.overwrite(subforums, "subforums.json");
        console.log(req.body);
        res.json("stored object: " + req.body.title);

    });

    app.get('/subforums', async (req, res) => {
        const subforums = await jsonRoutine.loadJSON("subforums.json");
        res.json(subforums);
    });
}