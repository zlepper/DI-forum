let jsonRoutine = require("./jsonRoutine");

exports.addPostsHandler = function (app) {

    app.post('/test', async (req, res) => {
        console.log(req.body);
        const posts = await jsonRoutine.loadJSON('posts.json');
        posts.push(req.body);
        await jsonRoutine.overwrite(posts, 'posts.json')
        res.json(posts);
    })

    app.get('/posts', (req, res) => {
        res.json(posts)

    })
}