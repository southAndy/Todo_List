import "../TodoList.css";
function TodoList({todos,setTodo}){
    const deletTodo = ({id})=>{
        setTodo(todos.filter((data)=>data.id!==id))
    }
    const finishTodo = ({completed,id})=>{
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
                    <input type="checkbox" onClick={()=>finishTodo(todo)} defaultChecked={todo.completed}/>
                    <div  className={`todo_item-title ${todo.completed?'done':'doing'}`}>{todo.title}</div>
                    <button >edit</button>
                    <button onClick={()=>deletTodo(todo)}>delet</button>
                </div>
            ))}
        </div>
    )
}

export default TodoList;