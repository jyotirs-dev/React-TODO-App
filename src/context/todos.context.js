import React, { createContext } from "react";
import useTodoState from "../hooks/useTodoState";
const defaultTodos = [
     { id: 1, task: "task one", completed: false },
     { id: 2, task: "test two task", completed: true }
]
export const TodosContext = createContext();

export function TodosProvider(props) {

     const todostuff = useTodoState(
          defaultTodos
     );
     return (
          <TodosContext.Provider value={todostuff}>
               {props.children}
               </TodosContext.Provider>
     )

}
