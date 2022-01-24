//取消按鈕的節點
const cancelButton = document.querySelector(".button_cancel");

//想消失的節點
const editContent = document.querySelector(".edit_content");
//當點擊按鈕時，會...
// cancelButton.addEventListener("click", cancelContent);

//會觸發的事情
export function cancelContent(e) {
  const editContent = document.querySelector(
    ".addtask_container .edit_content"
  );
  const editContents = document.querySelectorAll(".reminder_container .edit");

  //取得對應位置
  const element = e.target;
  const elmentIndex = element.dataset.index;

  if (e.target.matches(".reminder_container .button_cancel")) {
    editContents[elmentIndex].classList.toggle("display_none");
  }
  if (e.target.matches(".addtask_container .button_cancel")) {
    editContent.classList.toggle("display_none");
  }
}
