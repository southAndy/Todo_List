import React,{useState} from 'react';
import './App.css';
import Nav from "./components/Nav";
import TodoList from './components/TodoList';


function App() {
  // const [count,setCount]=useState(0);
  const [input,setInput]=useState("");
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
