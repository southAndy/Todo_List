import highlightReminder from "../highlightReminder.js";
export default function storeElementData() {
  //儲存內容's node

  let title = document.querySelector(".addtask_list_input").value;
  let comment = document.querySelector("textarea").value;
  let inputMonth = document.querySelector("[type='date']").value;
  let time = document.querySelector("[type='time']").value;

  //取得代辦事項的時間
  let monthss = new Date(inputMonth);
  let months = monthss.getMonth() + 1; //12
  let day = monthss.getDate(); //18
  let month = `${months ? months : ""} ${months ? "/" : ""}${day ? day : ""}`;

  //製作每個備忘錄的id，作為識別
  const reminderID = Date.now(inputMonth);
  //儲存表單的輸入內容
  const inputReminderContent = {
    title,
    comment,
    done: false,
    marked: false,
    month,
    time,

    reminderID,
  };

  //檢測星星狀態，調整渲染結果
  const starIcon = document.querySelector(".addtask_container .star_icon");
  if (starIcon.matches(".fas")) {
    console.log("marked now");
    inputReminderContent.marked = true;
  }
  console.log(inputReminderContent);
  return inputReminderContent;
}

function storeReminderData(reminderIndex) {
  //指到對應事項的標題
  let title = document.querySelectorAll(
    ".reminder_container .addtask_list_input"
  )[reminderIndex].value;
  let comment = document.querySelectorAll(".reminder_container textarea")[
    reminderIndex
  ].value;
  let inputMonth = document.querySelectorAll(
    ".reminder_container [type='date']"
  )[reminderIndex].value;
  let time = document.querySelectorAll(".reminder_container [type='time']")[
    reminderIndex
  ].value;

  //取得代辦事項的時間
  let monthss = new Date(inputMonth);
  let months = monthss.getMonth() + 1; //12
  let day = monthss.getDate(); //18
  let month = `${months ? months : ""} ${months ? "/" : ""}${day ? day : ""}`;

  //製作每個備忘錄的id，作為識別
  const reminderID = Date.now(inputMonth);
  const newReminderContent = {
    title,
    comment,
    done: false,
    marked: false,
    month,
    time,

    reminderID,
  };
  const starIcon = document.querySelectorAll(".reminder_container .star_icon");
  if (starIcon[reminderIndex].matches(".fas")) {
    console.log("marked now");
    newReminderContent.marked = true;
  }
  console.log(newReminderContent);
  return newReminderContent;
}
export { storeReminderData };
