import todo from "../todo.js";

const completedPage = {
  components: { todo },
  template: `
  <todo :localData="filterLocalData"/>  
  `,
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
        (data, index) => data.done != false
      );
    },
  },
};

export default completedPage;
