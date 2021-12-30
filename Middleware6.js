var express = require('express');
var app = express();
var router = express.Router();
var checkUrl = function(req, res, next) {
    console.log("current route is", req.originalUrl)
    next();
}
app.get('/', function(req, res) {
    // res.send('this is a home page with get method')
    res.sendFile(__dirname + "/Home.html")
});
router.get('/about', checkUrl, function(req, res) {
    // res.send('this is an about page with get method')
    res.sendFile(__dirname + "/About.html")

});
router.get('/login', checkUrl, function(req, res) {
    // res.send('this is a login page with get method')
    res.sendFile(__dirname + "/Login.html")
});
app.use('/', router);
app.listen(5000);