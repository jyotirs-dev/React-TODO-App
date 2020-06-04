import React, { useContext } from 'react';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import useinputState from "./hooks/useinputState";
import { TodosContext } from "./context/todos.context";

function TodoForm() {
     const { dispatch } = useContext(TodosContext);
     const [value, updatevalue, resetvalue] = useinputState("");
     return (
          <Paper style={{ margin: "1rem 0", padding: "0 1rem" }}>
               <form onSubmit= {e=>{
                    e.preventDefault();
                    dispatch({type:"ADD",task:value})
                    resetvalue();
               }}>
                    <TextField 
                    value={value} 
                    onChange={updatevalue}
                    margin='normal'
                    label='Add New Todo'
                    fullWidth/>
               </form>
          </Paper>
     )
}

export default TodoForm;
