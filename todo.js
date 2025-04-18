let todoList = document.getElementById("todo-list");
let input = document.getElementById("todo-input");

// Load from local storage
window.onload = () => {
  if (localStorage.getItem("todos")) {
    todoList.innerHTML = localStorage.getItem("todos");
    addEventListeners();
  }
};

// Add task
function addTask() {
  if (input.value.trim() === "") {
    alert("Enter a task!");
    return;
  }

  const li = document.createElement("li");
  li.innerHTML = `
    <span class="text">${input.value}</span>
    <div>
      <button class="edit-btn">✏️</button>
      <button class="delete-btn">❌</button>
    </div>
  `;

  todoList.appendChild(li);
  input.value = "";
  saveData();
  addSingleListeners(li);
}

// Save to local storage
function saveData() {
  localStorage.setItem("todos", todoList.innerHTML);
}

// Add all listeners
function addEventListeners() {
  document.querySelectorAll("li").forEach(addSingleListeners);
}

// For each task
function addSingleListeners(li) {
  const span = li.querySelector(".text");
  const deleteBtn = li.querySelector(".delete-btn");
  const editBtn = li.querySelector(".edit-btn");

  span.onclick = () => {
    li.classList.toggle("completed");
    saveData();
  };

  deleteBtn.onclick = () => {
    li.remove();
    saveData();
  };

  editBtn.onclick = () => {
    let newTask = prompt("Edit task:", span.innerText);
    if (newTask) {
      span.innerText = newTask;
      saveData();
    }
  };
}

// Dark mode toggle
document.getElementById("theme-toggle").onclick = () => {
  document.body.classList.toggle("dark");
};
