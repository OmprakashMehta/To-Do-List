const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function Add() {
  if (inputBox.value === "") {
    alert("Please Enter Task");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);

    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
    li.querySelector("span").addEventListener("click", remove);
    function remove() {
      li.remove();
      saveData();
    }
    inputBox.value = "";
    saveData();
  }
}

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}
function showTask() {
  listContainer.innerHTML = localStorage.getItem("data");
  listContainer.querySelectorAll("li span").forEach((span) => {
    span.addEventListener("click", function () {
      span.parentElement.remove();
      saveData();
    });
  });
}
showTask();
