const taskList = [];
function saveTask() {
//   debugger;
  console.log("saving");
  const taskName = document.getElementById("txtItem").value;
  const todoObj = {
    taskId: taskList.length + 1,
    taskName: taskName,
    // done: false,
  };
  taskList.push(todoObj);
}

function displayTasks() {
  for (const i = 0; i < taskList.length; i++) {
    const dynamicListItem = document.createElement("li");
    dynamicListItem.classList.add("task");
    const label = document.createElement("label");
    const p = document.createElement("p");
    p.textContent = taskList[index].taskName;
    label.appendChild(p)
    dynamicListItem.appendChild(label);
    document.getElementById("myTaskList").appendChild(dynamicListItem);
  }
}
