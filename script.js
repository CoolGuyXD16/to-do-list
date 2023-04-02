const MAX_TODOS = 10;
let todoCount = 0;

function addTodo() {
  const input = document.getElementById("new-item-input");
  const text = input.value.trim();

  if (text === "") {
    return;
  }

  if (todoCount >= MAX_TODOS) {
    alert("Maximum number of to-do's reached!");
    return;
  }

  const list = document.getElementById("todo-list");
  const newItem = document.createElement("li");
  const checkbox = document.createElement("input");
  const label = document.createElement("label");

  checkbox.type = "checkbox";
  checkbox.id = `todo-${todoCount}`;
  label.htmlFor = `todo-${todoCount}`;
  label.textContent = text;

  newItem.classList.add("new-item");
  newItem.appendChild(checkbox);
  newItem.appendChild(label);

  list.appendChild(newItem);
  input.value = "";
  todoCount++;
}

const addButton = document.getElementById("add-button");
addButton.addEventListener("click", addTodo);

const input = document.getElementById("new-item-input");
input.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    addTodo();
  }
});

addButton.addEventListener('click', function() {
  addButton.style.backgroundColor = 'grey';
  setTimeout(function() {
    addButton.style.backgroundColor = '';
  }, 100);
});
