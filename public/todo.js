window.onload = function () {
  const item = document.getElementById('item');
  addItem = () => {
    const itemValue = item.value;
    axios.post('todo-list', {item : itemValue}).then(() => {
      location.reload();
    });
  }

  removeItem = (id) => {
    axios.delete(`todo-list/${id}`).then(() => {
      location.reload();
    });
  }
}