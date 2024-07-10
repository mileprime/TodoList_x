var tasks = [];
var count = 0;

document.getElementById("addTaskButton").addEventListener("click", () => {
  var userInput = document.getElementById("taskInput");
  var userInputValue = userInput.value;

  if (userInputValue != "") {
    addTask(userInputValue);
  }
});

function addTask(task) {
  count++;
  tasks.push({ id: count, text: task });
}
