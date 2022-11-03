import Form from "./Form"


function List(props) {
    let todos = props.todos
    let onDelete = props.onDelete
    let onDone = props.onCompleted
    let inputText = props.inputText

    return(
        <div className='todoList'>
                            {todos.map((todo) => {
                              return  todo.isEdited?<Form inputText={inputText}
                               key={todo.id}
                              />:
                              <div  className='todo-row' key={todo.id}>
                     
                             <input type="checkbox" checked={todo.isChecked} onChange={()=>{
                                  onDone(todo.id);
                             }} />
                             {todo.value}                   
                     
                             <button className="deleteButton" onClick={()=>{onDelete(todo.id)}}>Delete</button>
                         </div>
                     })
                     }
                      </div>
             )
         }

export default List;