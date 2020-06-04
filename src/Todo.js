import React from 'react';
import useToggle from "./hooks/usetoggleState";
import EditTodoForm from "./EditTodoForm";
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItem';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";

function Todo({ task, completed, id, removeTodo, toggleTodo, editTodo }) {
     const [isEditing, toggleEditing] = useToggle(false)

     return (<ListItem style={{height:"64px"}}>
               {isEditing 
               ? 
               <EditTodoForm editTodo={editTodo} id={id} toggleEditing ={toggleEditing} task={task}/>
               :
               <>
               <Checkbox tabIndex = {-1} checked={completed} onClick={() => toggleTodo(id)}/>
                    <ListItemText style={{ textDecoration: completed ? "line-through" : "none" }}>{task}</ListItemText>
                    <ListItemSecondaryAction>
                         <IconButton aria-label='Delete' onClick={() => removeTodo(id)}>
                              <DeleteIcon />
                         </IconButton>
                         <IconButton aria-label='Edit' onClick={toggleEditing}>
                              <EditIcon />
                         </IconButton>
                    </ListItemSecondaryAction>
                    </>
     }
               </ListItem>)
}

export default Todo;
