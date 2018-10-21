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
        const id = req.query.parentid;
        const subforums = await jsonRoutine.loadJSON("subforums.json");
        if(id) {
            const childForums = subforums.filter(forum => forum.parentid === id);
            res.json(childForums);
        } else {
            res.json(subforums);
        }
    });

    app.get('/subforums/:id', async (req, res) =>  {
        const id = req.params.id;
        const forums = await jsonRoutine.loadJSON("subforums.json");
        if(id) {
            const subforum = forums.find(forum => forum.id === id);
            res.json(subforum);
        }


    });
}