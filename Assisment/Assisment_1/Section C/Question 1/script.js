const taskInputField = document.querySelector("#taskInputField");
const addTask = document.querySelector("#addTask");
const taskListContainer = document.getElementById("taskListContainer");
const taskContainer = [];
let currentValue = "";

taskInputField.addEventListener("keyup", (event) => {
  currentValue = event.target.value;
});

addTask.addEventListener("click", () => {
  let child = createListChild();
  taskContainer.push(child);
  taskListContainer.innerHTML = "";
  addChild();
});

function addChild() {
  if (taskContainer.length > 0) {
    taskContainer.forEach((element) => {
      taskListContainer.appendChild(element);
    });
  }
}

function createListChild() {
  const div = document.createElement("div");
  div.className = "listItem px-2 py-2 border-b";
  div.textContent = currentValue;
  return div;
}
