import "../TodoList.css";

function TodoList({todos,setTodo}){
    const deletTodo = ({id})=>{
        setTodo(todos.filter((data)=>data.id!==id))
    }
    return (
        <div className="container">
            {todos.map((todo)=>(
                <div className="todo_item">
                    <div className="todo_item-title">{todo.title}</div>
                    <button>完成</button>
                    <button>編輯</button>
                    <button onClick={()=>deletTodo(todo)}>刪除</button>
                </div>
            ))}
        </div>
    )
}

export default TodoList;