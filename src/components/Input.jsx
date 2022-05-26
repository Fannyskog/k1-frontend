
import React, { useState } from 'react';

import axios from "axios";


function Input() {

const [todo, setTodo] = useState("");
    

async function addTodo() {
  await axios.post("http://localhost:4000/todos", {
    task: todo,
  });
}

const handleChange = (e) => {
setTodo(e.target.value);
         
     };      
 return  (
    <form>
    <input
      placeholder="Enter a task"
      onChange={(e) => handleChange(e)}
      value={todo}
      
    />
    <button onClick={() => [addTodo()]}>Add task</button>
  </form>
);
}
  
 export default Input;
