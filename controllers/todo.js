const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://amy:123aaa@todolist-ckzzi.mongodb.net/test?retryWrites=true&w=majority', {useNewUrlParser: true})

const todoSchema = new mongoose.Schema({
  item: String
})

const Todo = mongoose.model('Todo', todoSchema);

const todoList = [
  {item: 'breakfast'},
  {item: 'walk'}
];
module.exports = function (app) {

  app.get('/todoList', (req, res) => {
    Todo.find({}, (err, data) => {
      if(err) throw err;
      res.render('todo', {todoList: data})
    })
  });

  app.post('/todoList', (req, res) => {
    Todo(req.body).save((err, data) => {
      if(err) throw err;
      res.json(data)
    })
  });
};