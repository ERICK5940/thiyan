const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
  if (inputBox.value.trim() === "") {
    alert("You must write something!");
    return;
  }

  let li = document.createElement("li");
li.innerText = inputBox.value;

// Create a delete button
let span = document.createElement("span");
span.textContent = "X";
span.style.color = "red";
span.style.marginLeft = "10px";
span.style.cursor = "pointer";
span.style.fontSize ="20px"
// Append the delete button to the list item
li.appendChild(span);
listContainer.appendChild(li);
inputBox.value = "";


  saveData();
}

// Toggle check on click
listContainer.addEventListener("click", function(e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    saveData();
} else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    saveData();
}
});

// Optional: Save tasks in browser (localStorage)
function saveData() {
  localStorage.setItem("tasks", listContainer.innerHTML);
}

// Optional: Load saved tasks
function showTasks() {
  listContainer.innerHTML = localStorage.getItem("tasks") || "";
}

showTasks();
