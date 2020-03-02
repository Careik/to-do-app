function onReady() {
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');

  addToDoForm.addEventListener('submit', event => {
    event.preventDefault();

    //get the text
    let title = newToDoText.value;

    //create a new li
    let newLi = document.createElement('li');
    newLi.className += "mdl-list__item";


    //create a new input
    let checkbox = document.createElement('input');
    checkbox.className += "mdl-checkbox__input";

     //delete button
    let deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.className += "mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect";

    deleteBtn.addEventListener('click', function(event) {
      toDoList.removeChild(this.parentElement);
    })

    //set the inputs type to checkbox
    checkbox.type = "checkbox";

    //set the title
    newLi.textContent = title;

    //attach the checkbox to the li
    newLi.appendChild(checkbox);

    //attach the li to the ul
    toDoList.appendChild(newLi);

    //empty thee input
    newToDoText.value = '';

    //attach delete button to the li
    newLi.appendChild(deleteBtn);


  });
}

window.onload = function() {
  onReady();
};
