import React from 'react';
import TextField from '@material-ui/core/TextField';
import useinputState from "./hooks/useinputState";

function EditTodoForm({ editTodo, id, toggleEditing, task }) {
     const [value, updatevalue, resetvalue] = useinputState(task);
     return (

          <form onSubmit= {e=>{
                    e.preventDefault();
                    editTodo(id,value);
                    resetvalue();
                    toggleEditing();
               }}
               style={{ marginLeft: "1rem", width: "50%" }}
               >
                    <TextField 
                    value={value} 
                    onChange={updatevalue}
                    margin='normal'
                    autoFocus
                    fullWidth/>
               </form>

     )
}

export default EditTodoForm;
