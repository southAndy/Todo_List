import {
  getDataFromLocalStorage,
  storeDataToLocalStorage,
} from "./data/localStorage.js";
import storeElementData from "./data/storeElementData.js";
import createReminder from "./createReminder.js";
import { storeReminderData } from "./data/storeElementData.js";

const checkboxes = document.querySelectorAll("[type='checkbox']");
const checkContents = document.querySelectorAll("[type='text']");

//? 存輸入資料的陣列
let inputList = JSON.parse(localStorage.getItem("inputList")) || [];

checkboxes.forEach((checkbox) => {
  checkbox.addEventListener("click", removeReminder);
});

export default function removeReminder(e) {
  console.log("remove", e.target);

  //get localStorage's data
  let inputList = JSON.parse(localStorage.getItem("inputList")) || [];
  console.log(inputList);

  //取得input的data資料
  const el = e.target;
  const indexs = el.dataset.index;
  inputList[indexs].done = !inputList[indexs].done;

  e.target.nextElementSibling.classList.toggle("done");

  localStorage.setItem("inputList", JSON.stringify(inputList));
}

//todo 修改代辦事項內容，會馬上調整
function modifyContentButton(e) {
  const taskContainer = document.querySelector(".reminder_container");

  const el = e.target;
  const elIndex = el.dataset.index;

  //取到每個代辦事項的按鈕
  if (e.target.matches(".reminder_container .button_save")) {
    //從本地資料庫取出對應的資料
    let inputList = getDataFromLocalStorage();

    //將對應的內容修改對應資料的
    inputList[elIndex] = storeReminderData(elIndex);

    //重新渲染
    createReminder(inputList, taskContainer);
    //存回本地
    storeDataToLocalStorage(inputList);
  }
}

export { modifyContentButton };
