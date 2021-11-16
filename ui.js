class UI {
  static addToDotoUI(newTodo) {
    const todoList = document.getElementById("todo-list");
    // todoList.innerHTML += `
    // <li>${newTodo.text}<a class="delete-todo" href="#">
    //   <i class="fas fa-trash-alt"></i>
    //   </a>
    // </li>`;
    const li = document.createElement("li");
    const a = document.createElement("a");
    const i = document.createElement("i");

    li.textContent = newTodo.text;
    a.className = "delete-todo";
    i.className = "fas fa-trash-alt";
    a.appendChild(i);
    li.appendChild(a);
    todoList.appendChild(li);
  }

  static clearInputs(element1) {
    element1.value = "";
  }

  static displayMessage(message, type) {
    const sectionTodo = document.querySelector("section");

    const div = document.createElement("div");

    div.className = `display-message ${type}`;
    div.textContent = message;
    sectionTodo.appendChild(div);

    setTimeout(function () {
      div.remove();
    }, 1000);
  }

  static loadAllToDos(todos) {
    const todoList = document.getElementById("todo-list");

    todos.forEach((todo) => {
      todoList.innerHTML += `
      <li>${todo.text}
      <a class="delete-todo" href="#">
      <i class="fas fa-trash-alt"></i>
      </a>
      </li>`;
    });
  }

  static deleteToDoFromUI(element) {
    element.parentElement.remove();
  }

  static clearAllToDoFromUI() {
    const todoList = document.getElementById("todo-list");

    while (todoList.firstElementChild !== null) {
      todoList.firstElementChild.remove();
    }
  }
}
