import { useState } from 'react';
import Form from './Form';
import List from './List';
import "./TodoList.css"
const Todolist = () => {
    
    const [todos, setTodos] = useState([]);
   
    function handleToDoAdd(inputText){
        if(!inputText){
            return
        }
        const todo = {
            id: Math.random(),
            value: inputText,
            isChecked: false,
            isEditMode:false
        }
        setTodos([...todos, todo]);
        
    }

    function handleDeleteTodo(id){
        const filterTodos=todos.filter(item=>{
          return item.id !== id
       })
       setTodos(filterTodos);
    }

    function handleComletedChange(id){
       setTodos(todos.map(item=>{
            if(item.id === id){
                
               return {...item,isChecked:!item.isChecked}              

            }
            return item
        }));
        
    }

    return (
        <div>            
          <Form  onSubmit={handleToDoAdd} />
          <List todos = {todos} onCompleted={handleComletedChange} onDelete={handleDeleteTodo}  />
        </div>
    );
}
export default Todolist;