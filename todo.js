var tasks = [];
var count = 0;
var deleteId = null;
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
  taskList.classList = "list-group mt-4";
  taskList.innerHTML = "";
  tasks.forEach((item) => {
    // console.log(item, "single task");
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
      deleteId = item.id;
    });
    editIcon.addEventListener("click", () => {
      let textvalue = document.createElement("input");
      textvalue.value = item.text;
      console.log(text);
      const editModal = new bootstrap.Modal(
        document.getElementById("exampleModal")
      );
      editModal.show();
    });
  });
}

function deleteTask(id) {
  tasks = tasks.filter((task) => {
    //return only the tasks that its id is not equal to this id
    //if you see this id kick it out of the array
    return task.id != id;
  });
  showTasks();
  console.log(tasks, deleteId, "deleted the task");
}

const deletebtn = document.getElementById("confirmDeleteButton");
deletebtn.addEventListener("click", () => {
  deleteTask(deleteId);

  var trashModal = bootstrap.Modal.getInstance(
    document.getElementById("exampleModal-delete")
  );
  trashModal.hide();
});

// var arr = [
//   { name: "Ali", age: 88 },
//   { name: "Ahmed", age: 29 },
//   { name: "Jhon", age: 92 },
// ];

//filter array
// var filterd = arr.filter((item) => {
//   return item.id !== "29802";
// });

//map array
// var newArray = arr.map((item) => {
//   if (item.age == 88) {
//     return { ...item, name: "Too old" };
//   } else {
//     return item;
//   }
// });
// console.log(newArray);
