import React,{useState,useEffect,useMemo} from 'react';
import './App.css';
import Nav from "./components/Nav";
import TodoList from './components/TodoList';
import './sass/style.scss';

function App() {
  
  const [input,setInput]=useState("");
  //存提醒事項的清單
  const [todos,setTodo]=useState([]);
  //專門存狀態改變的
  const [stateTodo,setStateTodos] = useState("all");

  const renderTodo = useMemo(()=>{
    return todos.filter((todo)=>{
      switch(stateTodo){
        case 'doing':
          return !todo.completed
        case 'done':
          return todo.completed
        default:
          return true
      }
    })

  },[stateTodo,todos])
  useEffect(()=>{
    //todo 從local 讀取資料
  },[todos])
  
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>Todo-list</h1>
        <Nav input={input} setInput={setInput} todos={todos} setTodo={setTodo}/>
        <nav>
          <p onClick={()=>setStateTodos('all')}>全部待辦事項</p>
          <p onClick={()=>setStateTodos('doing')}>進行中</p>
          <p onClick={()=>setStateTodos('done')}>完成</p>
        </nav>
      </header>
      <TodoList todos={renderTodo} setTodo={setTodo}/>
      
    </div>
  );
}

export default App;
