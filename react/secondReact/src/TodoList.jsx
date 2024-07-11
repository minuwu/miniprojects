import { useState } from "react"
import {v4 as uuidv4} from "uuid";
import './TodoList.css'

export function TodoList (){
    let [todos, setTodos] = useState([{task:"new task", key: uuidv4(), isDone: false}]);
    let [newTodo, setNewTodo] = useState("");
    let updateNewTodo = (event) => {
        // console.log(event.target.value);
        return setNewTodo(event.target.value);
    }
    let addTodo = () => {
        setTodos((previousTodos)=>{
            return [...previousTodos, {task:newTodo, key: uuidv4(), isDone: false}];
        })
        setNewTodo("");
    }
    let deleteTodo = (id) => {
        setTodos((todos)=>{
            return todos.filter((todo)=>{
                return todo.key != id;
            })
        })
    }
    let changeStatus =(key) =>{
        setTodos((todos)=>{
            return todos.map((todo)=>{
                if(todo.key==key){
                    if(todo.isDone==false){
                        todo.isDone=true;
                    }else{
                        todo.isDone=false;
                    }
                    return todo;
                }else{
                    return todo;
                }
            })
        })
    }
    let updateTodo = (key) =>{
        setTodos((todos)=>{
            return todos.map((todo)=>{
                if(todo.key==key){
                    todo.task = todo.task.toUpperCase();
                    return todo;
                }else{
                    return todo;
                }
            })
        })
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
                     return (
                        <li key={todo.key} className="todoItem">
                            <span className="todoTask"> 
                                <button className="btn" style={{marginRight:".8em"}} onClick={()=>changeStatus(todo.key)}>{todo.isDone?<i class="fa-solid fa-circle-check"></i>:<i class="fa-solid fa-circle-xmark"></i>}</button>
                            
                                {todo.task} 
                            </span>
                            <span className="todoBtns">
                            <button className="btn" onClick={()=>deleteTodo(todo.key)}><i class="fa-solid fa-trash"></i></button>
                            <button className="btn" onClick={()=>updateTodo(todo.key)}><i class="fa-solid fa-font"></i></button>
                            </span>
                        </li>
                     )
                    })
                }
            </ul>
            <hr></hr>

        </>
    )
}