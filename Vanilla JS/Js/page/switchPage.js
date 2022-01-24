import createReminder from "../createReminder.js";
import removeReminder from "../button.js";
import clickEdit from "../clickEdit.js";
import { finishReminder } from "../UI/page.js";
import {
  getDataFromLocalStorage,
  storeDataToLocalStorage,
} from "../data/localStorage.js";
import highlightReminder from "../highlightReminder.js";

const taskContainer = document.querySelector(".reminder_container");
let mainPage = document.querySelector("main");

//! all nav-a
const navbarLinks = document.querySelectorAll(".nav_item");

navbarLinks.forEach((link) => {
  link.addEventListener("click", switchPage);
});
export default function switchPage(e) {
  //判斷當前頁面
  let currentPage = "My task";
  navbarLinks.forEach((link) => {
    if (link.textContent != currentPage) {
      //todo
      link.classList.remove("active");
    }
  });

  if (e.target.textContent === "My Task") {
    console.log("current page: my task");
    //從本地端取出資料
    let inputList = getDataFromLocalStorage();

    //渲染畫面
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
    //2.點擊鉛筆的觸發事件
    mainPage.addEventListener("click", clickEdit);
    //!3.完成待辦的觸發事件
    mainPage.addEventListener("click", finishReminder);
  }
  if (e.target.textContent === "In Progress") {
    console.log("current page: In Progress");
    e.target.classList.toggle("active");

    //取出資料
    let inputList = JSON.parse(localStorage.getItem("inputList")) || [];

    //轉為陣列，可使用方法
    let arrayData = Array.from(inputList);
    console.log(arrayData);

    //篩選要渲染的待辦事項
    let finishReminders = arrayData.filter((data) => data.done != true);
    createReminder(finishReminders, taskContainer);

    starIcons.forEach((icon) =>
      icon.addEventListener("click", hilghlightReminder)
    );
    //編輯模式功能
    const editIcon = document.querySelectorAll(".reminder_container .pencil");
    editIcon.forEach((pencil) => pencil.addEventListener("click", clickEdit));
  }
  if (e.target.textContent === "Completed") {
    console.log("current page: Completed");
    e.target.classList.toggle("active");
    let inputList = JSON.parse(localStorage.getItem("inputList")) || [];

    //轉為陣列的方法
    let arrayData = Array.from(inputList);
    console.log(arrayData);
    //? 只取done:true的資料
    let finishReminders = arrayData.filter((data) => data.done != false);
    createReminder(finishReminders, taskContainer);

    //!當完成的清單取消勾選時，如何瞬間移除？
    // const checkboxs = document.querySelectorAll(
    //   ".reminder_container [type='checkbox']"
    // );
    // checkboxs.forEach((checkbox) => {
    //   checkbox.addEventListener("click", (e, index) => {
    //     console.log("99");
    //     finishReminders[index].done = !finishReminder[index].done;
    //     console.log(finishReminder);
    //     createReminder(finishReminders, taskContainer);
    //   });
    // });
  }
}
