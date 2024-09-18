const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

// Adding the task inside the Localstorage on form submit / on click
function addTodoListItem() {
  const inputValue = document.getElementById('input-box').value;
  console.log('clicked', inputValue)

  // Incase there is no value or empty string
  if (!inputValue || inputValue === "") {
    alert("You must add a task");
    return false;
  }

  // it will run that code
  const listOfTask = localStorage.getItem("taskList");
  console.log('listOfTask', listOfTask)

  // If there is no value in the array / empty array / empty data
  if (!listOfTask) {
    const arrayOfTasks = [inputValue]; // New Array
    console.log('arrayTest', arrayOfTasks)
    localStorage.setItem("taskList", JSON.stringify(arrayOfTasks));
    resetInputValue() // Resetting the input after adding value
    return false;
  }

  // If there is already some tasks / none empty array
  const existingList = JSON.parse(listOfTask)
  existingList.push(inputValue)
  console.log('existingList', existingList)
  localStorage.setItem("taskList", JSON.stringify(existingList));
  resetInputValue() // Resetting the input after adding value

  // View the updated list
  // Calling the view function
  showListItems(); 
}

// Reset input value 
const resetInputValue = () => {
  inputBox.value = ""
}

function showListItems() {
  console.log('Page loaded.');
  // Array .map

  // const numbers = [1, 2, 3, 4]; // Simple Array
 
  // Updated new array
  // const doubleNumbers = numbers.map((value) => `<li>${value * 2}</li>`);
  // console.log('doubleNumbers', doubleNumbers)

  const listOfTask = localStorage.getItem("taskList");
  const existingList = JSON.parse(listOfTask)
  const existingListHTML = existingList.map((item) => `<li>${item}</li>`);

  // For / White / Do 
  const listContainer = document.getElementById("list-container");
  listContainer.innerHTML = existingListHTML;

  // map, filter, find

}

// Show list on Page load
showListItems(); 

function addTask() {
  if (inputBox.value == "") {
    alert("You msust write something!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = "";
  saveData(); //save data into the browsar.... call the saveData();
}

listContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);

function saveData() {
  //defined the saveData....
  localStorage.setItem("data", listContainer.innerHTML);
}
function showTask() {
  listContainer.innerHTML = localStorage.getItem("data");
}
// showTask();
