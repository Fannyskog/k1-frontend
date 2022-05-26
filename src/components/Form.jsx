
import React, { useEffect, useState } from 'react';

import axios from "axios";



function Form() {

    
     const [todo, setTodo] = useState([]);
     
    
    const getTasks = async () => {
    const { data } = await axios.get("http://localhost:4000/todos",);
    setTodo(data);
     }

   
    function deleteItem(id) {
      axios.delete(`http://localhost:4000/todos/${id}`);
      console.log(`${id} is deleted`);
    }
    
     function completeItem(todo) {
        axios.put(`http://localhost:4000/todos/${todo.id}`, {
          id:todo.id,
          task: todo.task,
          complete: !todo.complete,
        })
        .then(function (res){
          console.log(res);
          getTasks();
        })
        .catch(function (err) {
          console.log(err);
        });
      }
  
   
      useEffect(() => {
        getTasks();
    }, []);   

       
    
  
  return (
     <div>
    
     <ul>
      {todo.map((todos) => (
        
       <li value={todos.id} key={todos.id}>{todos.task}
       
       
       
      <button className="delete-btn"onClick={() => {
                deleteItem(todos.id), window.location.reload()
              }}>✘</button>
              <button onClick={() => {completeItem(todos);}}> ✔</button> </li>
         ))}
        
    </ul>  
    
</div>
  

  );

        } 
 export default Form;