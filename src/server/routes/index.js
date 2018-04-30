const auth = require('../authentication');
const posts = require('../posts');

module.exports = function(app) {
    // Just fetching all posts
    app.get('/', (req, res, next) => {
        posts.getAllPosts((posts) => {
            res.json({posts: posts});
        });
    });

    // To serve static files (images)
    app.get('/file/*', (req, res, next) => {
        let filename = req.params[0];
        res.send(filename);
        // TODO smth with this
    });


    // Trying to authenticate
    app.post('/authenticate', (req, res, next) => {
        let login = req.body.login;
        let pass = req.body.pass;
        auth.authenticate(login, pass, result => {
            if (result) {
                var token = auth.generateToken();
                req.session.token = token;
                return res.json({token: token}); 
            }
            else { return res.json({token: false}); }
        });
    });

    app.get('/authenticate', (req, res, next) => {
        res.json({token: req.session.token});
    });

    app.get('/logout', (req, res, next) => {
        req.session.destroy();
    });


    /// Orders manipulation

    // New post
    app.post('/orders/new', (req, res, next) => {
        // Check if admin auth key
    });

    // Edit post
    app.put('/orders/:orderId', (req, res, next) => {

    });

    // Delete post
    app.delete('/orders/:orderId', (req, res, next) => {

    });
}
