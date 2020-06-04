import React, { createContext, useReducer } from "react";
import reducer from "../reducers/todo.reducer";

const defaultTodos = [
     { id: 1, task: "task one", completed: false },
     { id: 2, task: "test two task", completed: true }
]
export const TodosContext = createContext();
export const DispatchContext = createContext();

export function TodosProvider(props) {
     const [todos, dispatch] = useReducer(reducer, defaultTodos);

     return (
          <TodosContext.Provider value={todos}>
               <DispatchContext.Provider value={dispatch}>
                    {props.children}
               </DispatchContext.Provider>
          </TodosContext.Provider>
     )

}
