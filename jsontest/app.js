const express = require('express'),
    es6Renderer = require('express-es6-template-engine')
const app = express()
const port = 5001

app.engine('html', es6Renderer);
app.use(express.static('public'));
app.set('views', './views');
app.set('css', './css');
app.set('js', './js');
app.set('images', './images');
app.set('font', './font');
app.set('view engine', 'html');


app.get("/", function (req, res) {
    res.render("index");
});


app.listen(port)






