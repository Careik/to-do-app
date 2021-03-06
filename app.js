//OnReady Function
function onReady() {
  let toDos = [];

  const addToDoForm = document.getElementById('addToDoForm');

  function createNewTodo() {
    const newToDoText = document.getElementById('newToDoText');

    if(!newToDoText.value) { return; }

    toDos.push({
      title: newToDoText.value,
      complete: false
    });
    newToDoText.value = '';

    renderTheUI();
  }

//RenderUI Function
  function renderTheUI() {
    const toDoList = document.getElementById('toDoList');

    toDoList.textContent = '';

    toDos.forEach(function(toDo) {
      const newLi = document.createElement('li');
      const checkbox = document.createElement('input');
      checkbox.type = "checkbox";

      newLi.textContent = toDo.title;

      toDoList.appendChild(newLi);
      newLi.appendChild(checkbox);
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
