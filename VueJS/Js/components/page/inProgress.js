import todo from "../todo.js";

const inProgress = {
  components: { todo },
  template: `
  <todo :localData="filterLocalData"/>  
  `,
  //接收vm傳來的資料
  components: {
    todo,
  },
  data() {
    return {
      localData: JSON.parse(localStorage.getItem("inputList")) || [],
    };
  },
  computed: {
    filterLocalData() {
      return Array.from(this.localData).filter(
        (data, index) => data.done != true
      );
    },
  },
};

export default inProgress;
