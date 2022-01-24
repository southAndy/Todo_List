let inputList = JSON.parse(localStorage.getItem("inputList")) || [];

function storeDataToLocalStorage(data) {
  localStorage.setItem("inputList", JSON.stringify(data));
}

function getDataFromLocalStorage(data) {
  return JSON.parse(localStorage.getItem("inputList")) || [];
}

export { storeDataToLocalStorage, getDataFromLocalStorage };
