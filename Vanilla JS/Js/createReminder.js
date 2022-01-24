//渲染畫面的函數

//! reminderContainer 是決定渲染出來的結果要呈現的節點位置
export default function createReminder(inputData = [], reminderContainer) {
  reminderContainer.innerHTML = inputData
    .map(
      (content, i) => `
  <section class="addtask_list ${content.marked ? "edit_mode" : ""}">
    <div>
        <input type="checkbox" data-index = ${i} class="check_input"  ${
        content.done ? "checked" : ""
      }/>
        <input
          type="text"
          data-index = ${i}
          class="addtask_list_input ${content.done ? "done" : ""}""
          placeholder="${content.title || "Type Something Here..."}"
          
          />
          <div class="addtask_list_icon">
          <a class="addtask_list_marked" href="##">
            <i class="far fa-star star_icon ${content.marked ? "fas" : ""} ${
        content.marked ? "edit_mode_icon" : ""
      }" data-index = ${i}></i>
          </a>
          <a class="addtask_list_edit" href="##">
          <i class="fa-fw fas fa-pen pencil" data-index = ${i}></i>
          </a>
        </div>
    </div>
    <div class="reminder_content_icon">
      <a href=##><i class="fa-fw fas fa-calendar-alt calendar">${
        content.month || ""
      }</i></a>
      <a href=##><i>${content.time || ""}</i></a>
      <a href=##><i>${content.time || ""}</i></a>
      <span>${
        content.comment
          ? `<span> <i class="far fa-comment-dots"></i> Comment </span>
          `
          : ""
      }</span>
    </div>
    
  </section>
  <div class="edit display_none">
      <section class="addtask_content">
      <div class="time">
        <span>
          <i class="far fa-calendar-alt"></i>
          Deadline
        </span>
        <div class="time_inputbox">
          <input type="date" />
          <input type="time" />
        </div>
      </div>
      <div class="file">
        <span>
          <i class="fas fa-file-word"></i>
          File
        </span>
      </div>
      <div class="comment">
        <span> <i class="far fa-comment-dots"></i> Comment </span>
        <textarea
          name=""
          id=""
          cols="20"
          rows="10"
          placeholder="input your note:"
        >${content.comment}</textarea>
      </div>
    </section>
    <div class="confirm_buttonbox">
      <button type="reset" class="button_cancel" data-index = ${i}>X Cancel</button>
      <button class="button_save" data-index = ${i}>+ Save</button>
    </div>
  </div>
   `
    )
    .join("");
}
