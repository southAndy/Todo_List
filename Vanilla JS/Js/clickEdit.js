import saveReminder from "./saveButton.js";
import { cancelContent } from "./cancel.js";
export default function clickEdit(e) {
  const el = e.target;
  const index = el.dataset.index;
  if (el.matches(".pencil")) {
    const toggleMenus = document.querySelectorAll(".reminder_container .edit");
    toggleMenus[index].classList.toggle("display_none");
  }
}
