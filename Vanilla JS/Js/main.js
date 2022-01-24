import { cancelContent } from "./cancel.js";
//add new task button
import { addTask } from "./addTask.js";
//save reminder button
import saveReminder from "./saveButton.js";
import createReminder from "./createReminder.js";
//rendering page
import switchPage from "./page/switchPage.js";
import removeReminder, { modifyContentButton } from "./button.js";
import clickEdit from "./clickEdit.js";
import { finishReminder } from "./UI/page.js";
//localStorage
import {
  getDataFromLocalStorage,
  storeDataToLocalStorage,
} from "./data/localStorage.js";
import highlightReminder from "./highlightReminder.js";

//取出資料
let mainPage = document.querySelector("main");
let inputList = getDataFromLocalStorage();
const taskContainer = document.querySelector(".reminder_container");
//預設畫面渲染
createReminder(inputList, taskContainer);

//按鈕下拉
const editList = document
  .querySelector(".addtask_container .edit_content")
  .addEventListener("click", function () {
    if (editList.matches(".display_none")) {
      editList.classList.remove("display_none");
    }
    editList.classList.toggle("display_none");
  });

//1.點擊星星的觸發事件
mainPage.addEventListener("click", highlightReminder);
//! 2.點擊鉛筆的觸發事件
mainPage.addEventListener("click", clickEdit);
//3.完成待辦的觸發事件
mainPage.addEventListener("click", finishReminder);
//4.取消
mainPage.addEventListener("click", cancelContent);

//5.想針對個別代辦事項進行修改
mainPage.addEventListener("click", modifyContentButton);
