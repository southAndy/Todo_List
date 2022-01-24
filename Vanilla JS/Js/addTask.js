import {
  storeDataToLocalStorage,
  getDataFromLocalStorage,
} from "./data/localStorage.js";
const taskContainer = document.querySelector(".reminder_container");

const addTaskButton = document.querySelector(".addtask");
addTaskButton.addEventListener("click", addTask);

export function addTask(e) {
  const editList = document.querySelector(".addtask_container .edit_content");
  if (editList.matches("display_none")) {
    editList.classList.remove("display_none");
  }
  editList.classList.toggle("display_none");
}
