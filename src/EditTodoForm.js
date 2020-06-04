import React, { useContext } from 'react';
import TextField from '@material-ui/core/TextField';
import useinputState from "./hooks/useinputState";
import { TodosContext } from "./context/todos.context";

function EditTodoForm({ id, toggleEditing, task }) {
     const { dispatch } = useContext(TodosContext);
     const [value, updatevalue, resetvalue] = useinputState(task);

     return (

          <form onSubmit= {e=>{
                    e.preventDefault();
                    dispatch({type:"EDIT", ID:id , newTask: updatevalue});
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
