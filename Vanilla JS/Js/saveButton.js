import createReminder from "./createReminder.js";
import removeReminder from "./button.js";
import {
  storeDataToLocalStorage,
  getDataFromLocalStorage,
} from "./data/localStorage.js";
import clickEdit from "./clickEdit.js";
import { addTask } from "./addTask.js";
import storeElementData from "./data/storeElementData.js";
import highlightReminder from "./highlightReminder.js";

//! 按下save 渲染輸入內容，製作新的li

//取到save btn
const svaeButton = document.querySelector(".button_save");
svaeButton.addEventListener("click", saveReminder);

//渲染內容的母層節點
const taskContainer = document.querySelector(".reminder_container");

//? 存輸入資料的陣列
let inputList = JSON.parse(localStorage.getItem("inputList")) || [];
//添加新的內容
export default function saveReminder(plate) {
  //從local取出的資料
  let inputList = JSON.parse(localStorage.getItem("inputList")) || [];

  //編輯頁面的節點
  const forms = document.querySelector(".addtask_container form");
  // const starIcon = document.querySelector(".addtask_container .star_icon");
  // console.log(30, starIcon);
  // starIcon.addEventListener("click", highlightReminder);

  let inputReminderContent = storeElementData();
  console.log(31, inputReminderContent);

  inputList.push(inputReminderContent);
  //執行渲染資料的函數
  createReminder(inputList, taskContainer);

  //?加入本地儲存空間:要先將資料轉換為JSon格式（字串）
  localStorage.setItem("inputList", JSON.stringify(inputList));

  //? 把編輯表單關掉
  let listContents = document.querySelector(".edit_content");
  listContents.classList.toggle("display_none");
  //!重置表單內容
  forms.reset();
}
