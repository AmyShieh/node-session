window.onload = function () {
  const todoItem = document.getElementById("todoItem");
  console.log(todoItem.innerText);
  const data = {item: 'study'};
  addItem = function () {
    axios.post('/todoList', data).then(() => {
      location.reload()
    })
  }
};