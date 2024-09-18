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
  const listOfTask = localStorage.getItem("taskList");
  const existingList = JSON.parse(listOfTask)

 
  const itemsCount = existingList.length;

  console.log('existingList', itemsCount, existingList);

 // Basic Listing Array to HTML list (For Loop)
  // let listItemHtml = "";
  // for (let i = 0; i < itemsCount; i++) {
  //   listItemHtml += `<li>${existingList[i]}</li>`
  // }
  // listContainer.innerHTML = listItemHtml;

  // Populating list using forEach
  // Does not return any value.
  // Break / continue / Return(does not work with foreach)
  // Can not stop this after starting
  // let listItemHtml2 = "";
  // existingList.forEach((task, index) => {
  //   const sn = index + 1;
  //   listItemHtml2 += `<li>${sn}) ${task}</li>`
  // });
  // listContainer.innerHTML = listItemHtml2;

  // const existingListArrayHTML = existingList.map((item) => `<li>${item}</li>`); // Array to HTML Array Transformation

  const existingListArrayHTML = existingList.map((item, index) => {
    const Sn = index + 1;
    return `<li>${Sn} ${item}</li>`;
  }); // Array to HTML Array Transformation
  
  const existingListHTML = existingListArrayHTML.join(''); // Array to String conversion
  const listContainer = document.getElementById("list-container");
  listContainer.innerHTML = existingListHTML;

  // Completed
  // Modification / Update
  // Filter Options 
  // Sorting ASC / DESC
  // Delete
  // Reset

  [{
    id: 1,
    task: "This is my first task",
    description: "Description",
    status: 'todo', // 'completed'
    timestamp: '',
    endDateTime: '',
  },
  {
    id: 1,
    task: "This is my first task",
    description: "Description",
    status: 'todo', // 'completed'
    timestamp: '',
    endDateTime: '',
  }]

  //filter, find, findIndex, sort

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
