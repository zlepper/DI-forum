let jsonRoutine = require("./jsonRoutine");
const uuidv4 = require('uuid/v4');

exports.addPostsHandler = function (app) {

    app.post('/posts', async (req, res) => {
        console.log(req.body);
        const posts = await jsonRoutine.loadJSON('posts.json');
        req.body.id = uuidv4();
        posts.push(req.body);
        await jsonRoutine.overwrite(posts, 'posts.json')
        res.json(posts);
    })

    app.get('/posts', async (req, res) => {
        const threadId = req.query.threadId;
        const posts = await jsonRoutine.loadJSON('posts.json');
        if (threadId) {
            let threadList = []
            for (let i = 0; i < posts.length; i++){
                if(threadId == posts[i].threadId) {
                    threadList.push(posts[i])
                }
            }
            res.json(threadList);
        } else {
            res.json(posts);
        }

    })
}