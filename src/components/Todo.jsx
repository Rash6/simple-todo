import { useState } from "react";

import { TodoInput } from "./TodoInput"
import { TodoItem } from "./TodoItem"

export const Todo=()=>{
    const [todoList,setTodoList]=useState([])
    const getData =(todo)=>{
        //console.log(todo)
        setTodoList([...todoList,todo])
    };
    return (

        <div >
            <div className="box" >
            {todoList.map((e) => (
            <TodoItem todo={e}></TodoItem>
        ))}
        </div>

           <TodoInput getData={getData}/>
                  
        </div>
    )
}