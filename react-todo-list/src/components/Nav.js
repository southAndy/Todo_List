
import "../Nav.css";
function Nav({input,setInput,todos,setTodo}){
    const onInputChange = (event)=>setInput(event.target.value)
    const onInputSubmit = (event)=>{
        console.log("submit");
        event.preventDefault();
        setTodo([...todos,{id:new Date().getSeconds(),title:input,completed:false}]);
        setInput("");
    }
    //更新資料
    return (
        <nav className="select">
            <input type="text" placeholder="Enter a todo" value={input} onChange={onInputChange}/>
            <button type="submit" onClick={onInputSubmit}>Add</button>
        </nav>
    )
}

export default Nav