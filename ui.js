function UI() {}

UI.prototype.addToDotoUI = function (newTodo) {
  // <li>
  //   merhaba uğur. asd asd asdsad adasd sadas sadasd adasd as dasd
  //   <a class="delete-item" href="#">
  //     x
  //   </a>
  // </li>;

  const todoList = document.getElementById("todo-list");
  todoList.innerHTML += `
  <li>${newTodo.text}<a class="delete-todo" href="#">
    <i class="fas fa-trash-alt"></i>
    </a>
  </li>`;
};

UI.prototype.clearInputs = function (element1) {
  element1.value = "";
};

UI.prototype.displayMessage = function (message, type) {
  const sectionTodo = document.querySelector("section");

  const div = document.createElement("div");

  div.className = `display-message ${type}`;
  div.textContent = message;
  sectionTodo.appendChild(div);

  setTimeout(function () {
    div.remove();
  }, 1000);
};

UI.prototype.loadAllToDos = function (todos) {
  const todoList = document.getElementById("todo-list");

  todos.forEach((todo) => {
    todoList.innerHTML += `
    <li>${todo.text}
    <a class="delete-todo" href="#">
    <i class="fas fa-trash-alt"></i>
    </a>
    </li>`;
  });
};

UI.prototype.deleteToDoFromUI = function (element) {
  element.parentElement.remove();
};

UI.prototype.clearAllToDoFromUI = function () {
  const todoList = document.getElementById("todo-list");

  //console.log(todoList);

  while (todoList.firstElementChild !== null) {
    todoList.firstElementChild.remove();
  }
};
