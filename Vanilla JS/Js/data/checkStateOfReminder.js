export default function checkStateOfReminder(localList) {
  //透過本地端判斷列表狀態
  const starIcons = document.querySelectorAll(".reminder_container .star_icon");
  const iconContainers = document.querySelectorAll(
    ".reminder_container .addtask_list"
  );
  //1.是否有標記（按星星）
  iconContainers.forEach((data, index) => {
    if (localList[index].marked === true) {
      //改變表單顏色
      iconContainers[index].classList.toggle("edit_mode");

      //改變圖樣顏色
      starIcons[index].classList.toggle("fas");
      starIcons[index].classList.toggle("edit_mode_icon");
    }
  });

  const checkboxesInReminder = document.querySelectorAll(
    ".reminder_container [type='checkbox']"
  );

  //檢查資料庫決定是否添加   任務完成效果
  //2.是否已完成
  checkboxesInReminder.forEach((reminderElement, index) => {
    if (localList[index].done === true) {
      reminderElement.nextElementSibling.classList.toggle("done");
      reminderElement.setAttribute("checked", "");
    }
  });
}
