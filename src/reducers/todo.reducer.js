import { v4 as uuidv4 } from 'uuid';

const reducer = (todos, action) => {
     switch (action.type) {
          case 'ADD':
               return [...todos, { id: uuidv4(), task: action.task, completed: false }];
          case 'REMOVE':
               return todos.filter(todo => todo.id !== action.ID);
          case 'TOGGLE':
               return todos.map(todo =>
                    todo.id === action.ID ? { ...todo, completed: !todo.completed } : todo);
          case 'EDIT':
               return todos.map(todo =>
                    todo.id === action.ID ? { ...todo, task: action.newTask } : todo
               );
          default:
               return todos;
     }
}

export default reducer;
