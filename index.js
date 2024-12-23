const express = require('express');
const bodyParser = require('body-parser');
const app = express();

//middleware
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public')); //serve static files(css)
app.set('view engine', 'ejs'); //set ejs Template

let todos = [] //array to store task

//route
app.get('/', (req, res) => {
    res.render('index', {todos});
});

app.post('/add', (req, res) => {
    const newtodo =req.body.todo
    if (newtodo) todos.push(newtodo);
    res.redirect('/');
});

app.post('/delete', (req, res) => {
    const index = req.body.index;
    todos.splice(index, 1);
    res.redirect('/');
});
//start server
const PORT = 3000
app.listen(PORT, () => {console.log(`Server is running at http://localhost:${PORT}`)});