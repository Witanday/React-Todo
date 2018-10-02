import React from 'react';
import './Todo.css';

const TodoForm = (props) =>{
   
    return ( 
     
        <form onSubmit={props.addItem}>
          <input ref={props.refHandler} 
                  placeholder="enter task">
          </input>
          <button type="submit" onClick = { props.searchHandle}>Search</button>
          <button type="submit" >add Todo</button>
          <button type="submit" onClick ={props.clear}>Clear Completed</button>
        </form>
    
       )
}

export default TodoForm ;