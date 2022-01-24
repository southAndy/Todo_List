import { getDataFromLocalStorage } from "./data/localStorage.js";
export default function highlightReminder(clickedIcon) {
  //針對代辦事項的追蹤
  const iconContainers = document.querySelectorAll(
    ".reminder_container .addtask_list"
  );
  //上方新增事項的追蹤
  const menuContainer = document.querySelector(
    ".addtask_container .addtask_list"
  );

  //取出local資料
  let inputList = getDataFromLocalStorage();

  //透過index值去比對資料位置
  const el = clickedIcon.target;
  let index = el.dataset.index;

  if (el.matches(".reminder_container .star_icon")) {
    //修改本地端資料:index
    inputList[index].marked = !inputList[index].marked;

    //存資料
    localStorage.setItem("inputList", JSON.stringify(inputList));

    //改變對應表單顏色
    iconContainers[index].classList.toggle("edit_mode");

    //改變圖示icon
    el.classList.toggle("fas");
    el.classList.toggle("edit_mode_icon");
  }
  //修改新增表單的星星
  if (el.matches(".addtask_container .star_icon")) {
    el.classList.toggle("fas");
    el.classList.toggle("edit_mode_icon");
    menuContainer.classList.toggle("edit_mode");
  }
}
