import React, { useContext } from 'react';
import useToggle from "./hooks/usetoggleState";
import EditTodoForm from "./EditTodoForm";
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItem';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import { DispatchContext } from "./context/todos.context";

function Todo({ task, completed, id }) {

     const dispatch = useContext(DispatchContext);
     const [isEditing, toggleEditing] = useToggle(false)

     return (<ListItem style={{height:"64px"}}>
               {isEditing 
               ? 
               <EditTodoForm id={id} toggleEditing ={toggleEditing} task={task}/>
               :
               <>
               <Checkbox tabIndex = {-1} checked={completed} onClick={() => dispatch({type:"TOGGLE", ID:id})}/>
                    <ListItemText style={{ textDecoration: completed ? "line-through" : "none" }}>{task}</ListItemText>
                    <ListItemSecondaryAction>
                         <IconButton aria-label='Delete' onClick={() => dispatch({type:"REMOVE", ID:id})}>
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
