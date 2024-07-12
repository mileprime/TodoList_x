// Initialize an array to store tasks and set up initial variables
let tasks = [];
let count = 0;
let deleteId = null;
let editedId = null;

// Get access to the "Add Task" button
let addBtn = document.getElementById("addTaskButton");

// Attach an event listener to the "Add Task" button to handle adding tasks
addBtn.addEventListener("click", () => {
  // Get the user input from the input field
  let userInput = document.getElementById("taskInput");
  
  // Check if the input is not empty, then call the addTask function
  if (userInput.value != "") {
    addTask(userInput.value);
    // Clear the input box after adding the task
    userInput.value = "";
  } else {
    alert("Empty Task!!!");
  }
});

// Function to add a new task to the tasks array
function addTask(task) {
  count++;
  tasks.push({ id: count, text: task });
  showTasks();
}

// Function to display tasks in the task list
function showTasks() {
  let taskList = document.getElementById("taskList");
  taskList.classList = "list-group mt-4";
  taskList.innerHTML = "";
  
  // Loop through each task in the tasks array
  tasks.forEach((item) => {
    let li = document.createElement("li");
    li.classList = "list-group-item d-flex justify-content-between";
    
    let p = document.createElement("p");
    p.textContent = item.text;
    
    document.body.appendChild(taskList);
    taskList.appendChild(li);
    li.appendChild(p);
    
    let icons = document.createElement("div");
    icons.classList = "icons";
    li.appendChild(icons);
    
    let trashIcon = document.createElement("img");
    let editIcon = document.createElement("img");
    
    trashIcon.src = "./trash.svg";
    editIcon.src = "./edit.svg";
    
    icons.appendChild(trashIcon);
    icons.appendChild(editIcon);
    
    // Add click event to show delete confirmation modal
    trashIcon.addEventListener("click", () => {
      const trashModal = new bootstrap.Modal(
        document.getElementById("exampleModal-delete")
      );
      trashModal.show();
      deleteId = item.id;
    });

    // Add click event to show edit task modal
    editIcon.addEventListener("click", () => {
      let textvalue = document.getElementById("editTaskInput");
      textvalue.value = item.text;
      editedId = item.id;
      const editModal = new bootstrap.Modal(
        document.getElementById("exampleModal")
      );
      editModal.show();
    });
  });
}

// Function to edit an existing task
function editTask(taskid, updatedText) {
  let task = tasks.find((item) => item.id == taskid);
  if (task) {
    task.text = updatedText;
  }
  showTasks();
}

// Function to delete a task
function deleteTask(id) {
  tasks = tasks.filter((task) => {
    return task.id != id;
  });
  showTasks();
}

// Get the save button in the edit modal
let editSave = document.getElementById("saveEditButton");
// Get the input field in the edit modal
let updatedTaskInput = document.getElementById("editTaskInput");

// Add event listener to the save button to update the task
editSave.addEventListener("click", () => {
  editTask(editedId, updatedTaskInput.value);
  let trashModal = bootstrap.Modal.getInstance(
    document.getElementById("exampleModal")
  );
  trashModal.hide();
});

// Get the delete confirmation button
const deletebtn = document.getElementById("confirmDeleteButton");

// Add event listener to the delete button to remove the task
deletebtn.addEventListener("click", () => {
  deleteTask(deleteId);
  let trashModal = bootstrap.Modal.getInstance(
    document.getElementById("exampleModal-delete")
  );
  trashModal.hide();
});
