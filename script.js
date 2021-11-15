const form = document.getElementById("todo-form");
const todoElement = document.getElementById("todo-input");
const addButton = document.querySelector(".btn-add");
const section = document.getElementById("section-list");
const deleteAll = document.querySelector(".delete-all");

const ui = new UI();
const storage = new Storage();

eventListeners();

function eventListeners() {
  form.addEventListener("submit", addTodo);
  // addButton.addEventListener("click", addTodo);
  document.addEventListener("DOMContentLoaded", function () {
    let todos = storage.getToDosFromStorage();
    ui.loadAllToDos(todos);
  });

  section.addEventListener("click", deleteTodo);
  deleteAll.addEventListener("click", deleteAllTodo);
}

function addTodo(e) {
  const todo = todoElement.value.trim();

  if (todo === "") {
    // ERROR
    ui.displayMessage("Please, write your todo", "error");
  } else {
    const newTodo = new Todo(todo);

    storage.addToDotoStorage(newTodo);

    ui.addToDotoUI(newTodo);
    ui.displayMessage("Successfully added", "success");
  }
  ui.clearInputs(todoElement);
  e.preventDefault();
}

function deleteTodo(e) {
  if (e.target.className === "fas fa-trash-alt") {
    ui.deleteToDoFromUI(e.target.parentElement);

    storage.deleteToDoFromStorage(
      e.target.parentElement.parentElement.textContent
    );
    ui.displayMessage("Successful delete", "success");
  }
}

function deleteAllTodo() {
  ui.clearAllToDoFromUI();
  storage.clearAllToDoFromStorage();
}
