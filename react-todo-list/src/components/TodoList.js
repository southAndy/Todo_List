import "../TodoList.css";
// import {useEffect} from "react";
function TodoList({todos,setTodo}){
    const deletTodo = ({id})=>{
        setTodo(todos.filter((data)=>data.id!==id))
    }
    const finishTodo = ({completed,id})=>{
        console.log('heloo',{completed});
        //todo.completed = !todo.completed
        setTodo(todos.filter((todo)=>{
            if(todo.id===id){
                todo.completed=!todo.completed
                return todo
            }
            return todo
        }))
    }
   
    return (
        <div className="container">
            {todos.map((todo)=>(
                <div className="todo_item" key={todo.id}>
                    <input type="checkbox" onClick={()=>finishTodo(todo)} />
                    <div  className={`todo_item-title ${todo.completed?'done':'doing'}`}>{todo.title}</div>
                    <button >編輯</button>
                    <button onClick={()=>deletTodo(todo)}>刪除</button>
                </div>
            ))}
        </div>
    )
}

export default TodoList;