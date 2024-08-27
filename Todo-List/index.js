let inputBox = document.querySelector('#input-box');
let listContainer = document.querySelector('#listcontainer');

function addTask() {
    if (inputBox.value === '') {
        alert('Please write something in the input');
    } else {
        let li = document.createElement('li');
        li.textContent = inputBox.value;
        let deleteBtn = document.createElement('span');
        deleteBtn.innerHTML = "✗";  // Delete icon
        li.appendChild(deleteBtn);
        listContainer.appendChild(li);
    }
    inputBox.value = "";
    savedata();
}
listContainer.addEventListener('click' , (e) => {
  if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove()
    savedata()
  }
},false)
function savedata() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem('data');
}

showTask();

