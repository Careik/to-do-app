//OnReady Function
// OnReady Function
function onReady() {
  let toDos = [];
  let id = 0;

  const addToDoForm = document.getElementById('addToDoForm');

  function createNewTodo() {
    const newToDoText = document.getElementById('newToDoText');

    if(!newToDoText.value) { return; }

    toDos.push({
      title: newToDoText.value,
      complete: false,
      id: id
    });
    newToDoText.value = "";
    id++

    renderTheUI();
  }

//RenderUI Function
  function renderTheUI() {
    const toDoList = document.getElementById('toDoList');

    toDoList.textContent = '';

    toDos.forEach(function(toDo) {
      const newLi = document.createElement('li');
      const checkbox = document.createElement('input');
      const deleteBtn = document.createElement('button');
      deleteBtn.textContent = "Delete";
      checkbox.type = "checkbox";

      deleteBtn.addEventListener('click', event => {
        toDos = toDos.filter(function(item) {
          return item.id !== toDo.id;
        })
        renderTheUI();
      });

      //LOCAL STORAGE
      checkbox.addEventListener('click', item => {
        if (item.complete === false) {
          item.complete === true;
        } else if (item.complete === true) {
          item.complete === false;
        }
      })

      newLi.textContent = toDo.title;

      toDoList.appendChild(newLi);
      newLi.appendChild(checkbox);
      newLi.appendChild(deleteBtn);
  });
}

  addToDoForm.addEventListener('submit', event => {
    event.preventDefault();
    createNewTodo();
  });

  renderTheUI();
}

window.onload = function() {
  onReady();
};
