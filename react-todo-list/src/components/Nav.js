
import styled from "styled-components";
import "../Nav.css";

const TodoInput = styled.input`
    padding: 5px;
    outline: none;

    font-weight:600;
    font-size:20px
`
const TodoSubmit = styled.button`
    font-size:20px;
    background:burlywood;
    color:black;
    transition:1s ease;
    border-radius:2px

    &:disabled{
        background:grey;
    }
    &:not(&:disabled):hover{
        cursor:pointer;
        background:black;
        color:burlywood;
        border:1px solid black
    }

    ${props => {
        if (props.bigger) {
            return 'width: 200px;'
        }
    }}

`

// const TodoSubmitBlack = styled(TodoSubmit)`
//     background: black;
// `

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
            <TodoInput  type="text" placeholder="Enter a todo" value={input} onChange={onInputChange}/>
            <TodoSubmit disabled={!input} bigger={0} type="submit" onClick={onInputSubmit}>Add</TodoSubmit>
            {/* <TodoSubmitBlack disabled={!input} bigger={0} type="submit" onClick={onInputSubmit}>Add</TodoSubmitBlack> */}
        </nav>
    )
}

export default Nav