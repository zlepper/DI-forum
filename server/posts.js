exports.addPostsHandler = function (app) {
    const posts = []

    app.post('/test', (req, res) => {
        console.log(req.body);
        posts.push(req.body);
        res.json(posts);
    })

    app.get('/posts', (req, res) => {
        res.json(posts)

    })
}