const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const urlencodedParser = bodyParser.urlencoded({ extended: true});
const todoList = require('./controllers/todo');

app.use(express.static('./public'));
app.use(urlencodedParser);
app.use(bodyParser.json());

app.set('view engine', 'ejs');

app.listen(3000, 'localhost');

todoList(app);