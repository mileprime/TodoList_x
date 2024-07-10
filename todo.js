var tasks = [];
var count = 0;
//get access to the add button
var addBtn = document.getElementById("addTaskButton");

//attach an event to the add button
addBtn.addEventListener("click", () => {
  //get access to the input field
  var userInput = document.getElementById("taskInput");
  //check if the input is not empty then call addTask

  if (userInput.value != "") {
    addTask(userInput.value);
    //clear input box after adding
    userInput.value = "";
  } else {
    alert("Empty Task!!!");
  }
});

function addTask(task) {
  count++;
  tasks.push({ id: count, text: task });
  showTasks();
  // console.log(tasks);
}

function showTasks() {
  var taskList = document.getElementById("taskList");

  taskList.innerHTML = "";
  tasks.forEach((item) => {
    console.log(item, "single task");
    var li = document.createElement("li");
    li.classList = "list-group-item d-flex justify-content-between";

    var p = document.createElement("p");
    p.textContent = item.text;

    document.body.appendChild(taskList);
    taskList.appendChild(li);
    li.appendChild(p);

    var icons = document.createElement("div");
    icons.classList = "icons";
    li.appendChild(icons);

    var trashIcon = document.createElement("img");
    var editIcon = document.createElement("img");

    trashIcon.src = "./trash.svg";
    editIcon.src = "./edit.svg";

    icons.appendChild(trashIcon);
    icons.appendChild(editIcon);

    trashIcon.addEventListener("click", () => {
      const trashModal = new bootstrap.Modal(
        document.getElementById("exampleModal-delete")
      );
      trashModal.show();
    });
    editIcon.addEventListener("click", () => {
      const editModal = new bootstrap.Modal(
        document.getElementById("exampleModal")
      );
      editModal.show();
    });
  });
}
