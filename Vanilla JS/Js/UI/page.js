import {
  getDataFromLocalStorage,
  storeDataToLocalStorage,
} from "../data/localStorage.js";

function finishReminder(e) {
  //從本地空間取出資料
  let inputList = getDataFromLocalStorage();
  let index = e.target;
  let dataIndex = index.dataset.index;

  if (e.target.matches(".reminder_container .check_input")) {
    e.target.nextElementSibling.classList.toggle("done");
    e.target.setAttribute("checked", "");

    //修改local表單狀態
    inputList[dataIndex].done = !inputList[dataIndex].done;
    storeDataToLocalStorage(inputList);
  } else {
    //不是檢核按鈕會顯現的訊息
    console.log("not cancel button");
    return;
  }
}

export { finishReminder };
