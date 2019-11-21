const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyparser = require('body-parser');
const urlEncode = bodyparser.urlencoded({ extend: false });

mongoose.connect('mongodb+srv://amy:123aaa@todolist-ckzzi.mongodb.net/test?retryWrites=true&w=majority', {useNewUrlParser: true})

const schema = new mongoose.Schema({
  item: String
});

const Todo = mongoose.model('Todo', schema);


app.set('view engine', 'ejs');

app.use(express.static('./public'));

app.use(urlEncode);

app.use(bodyparser.json());

app.listen(3000);

app.get('/todo-list', (req, res) => {
  Todo.find({}, (err, data) => {
    res.render('todo', { data });
  })
})

app.post('/todo-list',  (req, res) => {
  Todo(req.body).save((err, data) => {
    res.json(data);
  })
})

app.delete('/todo-list/:id', (req, res) => {
  const { id } = req.params;
  Todo.remove({'_id': id }).then(() => {
    Todo.find({}, (err, data) => {
      res.render('todo', { data });
    })
  });

  console.log();
})

app.post('/payload', (req, res) => {
  console.log(req, res);
})

app.get('/payload', (req, res) => {
  console.log(req, res);
})