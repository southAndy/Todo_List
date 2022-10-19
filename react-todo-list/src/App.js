import React,{useState} from 'react';
import './App.css';
import Nav from "./components/Nav";
import TodoList from './components/TodoList';


function App() {
  
  const [input,setInput]=useState("");
  //存提醒事項的清單
  const [todos,setTodo]=useState([]);
  
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>Todo-list</h1>
        <Nav input={input} setInput={setInput} todos={todos} setTodo={setTodo}/>
      </header>
      <TodoList todos={todos} setTodo={setTodo}/>
    </div>
  );
}

export default App;
