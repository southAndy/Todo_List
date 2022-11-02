import React,{useState,useEffect,useMemo} from 'react';
import './App.css';
import Nav from "./components/Nav";
import TodoList from './components/TodoList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars,faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
//fontawesome 的icon 資料庫
import { library } from '@fortawesome/fontawesome-svg-core';
library.add(faBars,faMagnifyingGlass)
// import './sass/style.scss';

function App() {
  
  const [input,setInput]=useState("");
  //存提醒事項的清單
  const [todos,setTodo]=useState([]);
  //專門存狀態改變的
  const [stateTodo,setStateTodos] = useState("all");

  
  // let isShowSlide = false;
  let [isShowSlide,setSlideStatus] = useState(false);
  

  const renderTodo = useMemo(()=>{
    setSlideStatus(false)
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
    //https://jsonplaceholder.typicode.com/
    fetch('https://jsonplaceholder.typicode.com/todos').then((res)=>res.json()).then((json)=>setTodo(json))
  },[])
  
  let tepm = ()=>{
    isShowSlide = !isShowSlide
    setSlideStatus(isShowSlide)
  }
  
  
  return (
    <div className="App">
      <section className="App-main">
        <header className="App-header">
          <h1>Todo-list</h1>
          <FontAwesomeIcon icon="fa-bars" onClick={()=>tepm()}/>
        </header>
          <Nav input={input} setInput={setInput} todos={todos} setTodo={setTodo}/>
        <TodoList todos={renderTodo} setTodo={setTodo}/>
      </section>
      <nav className={`navbar ${isShowSlide?'navbar-show':'navbar-none'}`}>
          <p onClick={()=>setStateTodos('all')}>全部</p>
          <p onClick={()=>setStateTodos('doing')}>進行中</p>
          <p onClick={()=>setStateTodos('done')}>完成</p>
          {/* fixed */}
          <p>
            <FontAwesomeIcon icon="fa-magnifying-glass" />
          </p>
      </nav>
    </div>
    
  );
}

export default App;
