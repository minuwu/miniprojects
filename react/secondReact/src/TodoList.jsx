import { useState } from "react"
import {v4 as uuidv4} from "uuid";

export function TodoList (){
    let [todos, setTodos] = useState([{task:"new task", key: uuidv4()}]);
    let [newTodo, setNewTodo] = useState("");
    let updateNewTodo = (event) => {
        // console.log(event.target.value);
        return setNewTodo(event.target.value);
    }
    let addTodo = () => {
        setTodos((previousTodos)=>{
            return [...previousTodos, {task:newTodo, key: uuidv4()}];
        })
        setNewTodo("");
    }
    return (
        <>
            {/* {console.log("rendered", Date.now())} */}
            <input onChange={updateNewTodo} value={newTodo} style={{width:"100%"}}></input>

            <button onClick={addTodo} style={{width:"100%"}}>Add Task</button>
            <hr></hr>

            <h1>Tasks TODO</h1>
            <hr></hr>

            <ul>
                {
                    todos.map((todo)=>{
                     return <li key={todo.key}>{todo.task}</li>
                    })
                }
            </ul>
            <hr></hr>

        </>
    )
}