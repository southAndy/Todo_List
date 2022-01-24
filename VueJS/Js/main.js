import inProgress from "./components/page/inProgress.js";
import myTask from "./components/page/MyTask.js";
import completedPage from "./components/page/Completed.js";
import todo from "./components/todo.js";
Vue.createApp({
  components: {
    "in-progress": inProgress,
    "my-task": myTask,
    "completed-page": completedPage,
    "todo-list": todo,
  },
  data() {
    return {
      isShow: false,
      nowPage: "todo-list",
      currentPage: {
        isMyTask: true,
        isInProgress: false,
        isCompleted: false,
      },
      //存放渲染資料的陣列
      reminderList: [],
      newTodo: {
        title: "",
        date: "",
        comment: "",
        // reminderID: new Date(date),
        isMarked: false,
        isShowTodoDrop: false,
        done: false,
        //click pencil
        isEdit: false,
      },
      isDarkMode: false,
      isDailyMode: true,
    };
  },
  methods: {
    //顯示下拉表單
    showMenu(el) {
      this.isShow = !this.isShow;
    },
    //渲染代辦事項
    createReminder(el) {
      //呼叫local
      this.reminderList = JSON.parse(localStorage.getItem("inputList")) || [];
      console.log(this.newTodo, this.reminderList);
      //!!!!! 需解構obj，不然會指向相同記憶體位置
      this.reminderList.push({ ...this.newTodo });
      //存入local
      localStorage.setItem("inputList", JSON.stringify(this.reminderList));

      this.isShow = false;
      //清除表單內容
    },
    //切換不同頁面的功能
    switchPage(current) {
      console.log("right in ", current);
      if (current === "My Task") {
        console.log("im My Task");
        //修改Link樣式
        this.currentPage.isMyTask = true;
        this.currentPage.isCompleted = false;
        this.currentPage.isInProgress = false;

        //指定頁面
        this.nowPage = "my-task";
      }
      if (current === "In Progress") {
        console.log("in Progress");
        //修改Link樣式
        this.currentPage.isMyTask = false;
        this.currentPage.isCompleted = false;
        this.currentPage.isInProgress = true;

        //which page
        this.nowPage = "in-progress";

        // this.reminderList = JSON.parse(localStorage.getItem("inputList")) || [];
        // //轉array >> 篩選渲染內容
        // let newData = Array.from(this.reminderList).filter(
        //   (todo, index) => todo.done != true
        // );
        // console.log(newData);
      }
      if (current === "Completed") {
        console.log("in Completed");
        //修改Link樣式
        this.currentPage.isMyTask = false;
        this.currentPage.isInProgress = false;
        this.currentPage.isCompleted = true;

        //which page in
        this.nowPage = "completed-page";
      }
    },
    // todo
    //代辦事項的樣式
    addStarIcon(todo, event, index) {
      //icon本身的樣式
      event.target.classList.toggle("fas");
      event.target.classList.toggle("star_color");

      //調整背景色
      todo.isMarked = !todo.isMarked;
      this.reminderList = JSON.parse(localStorage.getItem("inputList")) || [];

      //調整樣式的狀態存入local
      this.reminderList[index].isMarked = todo.isMarked;
      // //修改結果存回local
      localStorage.setItem("inputList", JSON.stringify(this.reminderList));
    },
    //點擊鉛筆開啟編輯模式
    openEditList(todo, event) {
      todo.isEdit = !todo.isEdit;

      //顯示下拉表單
      todo.isShowTodoDrop = !todo.isShowTodoDrop;
    },
    // 代辦事項的完成效果
    finishReminder(todo, event, index) {
      todo.done = !todo.done;
      this.reminderList = JSON.parse(localStorage.getItem("inputList")) || [];

      //調整樣式的狀態存入local
      this.reminderList[index].done = todo.done;
      // //修改結果存回local
      localStorage.setItem("inputList", JSON.stringify(this.reminderList));
    },
    //代辦事項的取消按鈕
    cancelEditReminder(todo, event, index) {
      console.log("hi");
      todo.isShowTodoDrop = !todo.isShowTodoDrop;
      //修改鉛筆的顏色
      todo.isEdit = !todo.isEdit;
    },
    //修改代辦事項的內容
    modifyReimderContent(todo, event, index) {
      console.log("hi");
      //呼叫local
      this.reminderList = JSON.parse(localStorage.getItem("inputList")) || [];
      //修改對應的內容

      //關閉編輯視窗
      todo.isShowTodoDrop = !todo.isShowTodoDrop;
      //調整鉛筆狀態
      todo.isEdit = !todo.isEdit;
      //修改對應值儲存
      this.reminderList[index] = todo;
      //存入本地
      localStorage.setItem("inputList", JSON.stringify(this.reminderList));
      console.log(this.reminderList, "changed sucessful?");
    },
    switchMode() {
      this.isDailyMode = !this.isDailyMode;
      this.isDarkMode = !this.isDarkMode;
    },
  },

  created() {
    console.log("creating");
    this.reminderList = JSON.parse(localStorage.getItem("inputList")) || [];
  },
}).mount("#app");
