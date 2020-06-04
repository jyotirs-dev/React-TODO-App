import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export default initialTodos => {
     const [todos, setTodos] = useState(initialTodos);
     return {
          todos,
          addTodo: newtext => {
               setTodos([...todos, { id: uuidv4(), task: newtext, completed: false }])
          },
          removeTodo: todoID => {
               const updatedTodos = todos.filter(todo => todo.id !== todoID);
               setTodos(updatedTodos);
          },
          toggleTodo: todoID => {
               const updatedTodos = todos.map(todo =>
                    todo.id === todoID ? { ...todo, completed: !todo.completed } : todo);
               setTodos(updatedTodos);
          },
          editTodo: (todoID, newtext) => {
               const updatedTodos = todos.map(todo =>
                    todo.id === todoID ? { ...todo, task: newtext } : todo
               );
               setTodos(updatedTodos);
          }
     };
};
