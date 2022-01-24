import todo from "../todo.js";

const myTask = {
  components: { todo },
  template: `
  <todo :localData="localData"/>  
  `,
  //接收vm傳來的資料
  props: [],
  components: {
    todo,
  },
  data() {
    return {
      localData: JSON.parse(localStorage.getItem("inputList")) || [],
    };
  },
};

export default myTask;
