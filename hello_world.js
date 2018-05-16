const express = require('express');
const app = express();
const nunjucks = require('nunjucks');

nunjucks.configure('views', {
    autoescape: true,
    express: app,
    noCache: true
});

var animals = [
    {name: 'cats', favorite: true},
    {name: 'dogs', favorite: true},
    {name: 'tree frogs', favorite: true},
    {name: 'earth worms', favorite: false},
    {name: 'guinea pigs', favorite: true}];

app.use(express.static('public'));
    
app.get("/", function(req, resp) {
    resp.send("Hello, world22!");
});
app.get("/cats", function(req, resp) {
    resp.send("Meow!");
});
app.get("/dogs", function(req, resp) {
    resp.send("Woof!");
});
app.get("/greet/:name", function(req, resp) {
    var name = req.params.name;
    var year = 2018 - req.query.age || 2000;
    var context = {name: name, year: year};
    resp.render('greet.html', context);
});
app.get("/cats_and_dogs", function(req, resp) {
    resp.send("Living together!");
});
app.get("/fav_animals", function(req, resp){
    resp.render('fav_animals.html', {animals: animals});
});
app.listen(8000, function(){
    console.log("Listening on port 8000");
});