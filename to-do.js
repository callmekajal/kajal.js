function addTask() {
    let input = document.getElementById("todo-input");
    let taskText = input.value.trim();
  
    if (taskText === "") {
      alert("Please enter a task!");
      return;
    }
  
    // Create list item
    let li = document.createElement("li");
  
    // Toggle complete on click
    li.addEventListener("click", function () {
      li.classList.toggle("completed");
    });
  
    // Add task text
    li.textContent = taskText;
  
    // Create delete button
    let delBtn = document.createElement("button");
    delBtn.textContent = "X";
    delBtn.className = "delete-btn";
    delBtn.onclick = function () {
      li.remove();
    };
  
    // Append delete button to list item
    li.appendChild(delBtn);
  
    // Append item to the list
    document.getElementById("todo-list").appendChild(li);
  
    // Clear input
    input.value = "";
  }
  