import {createContext} from "react";
import {initialCoreState} from "./state";
import {ToDoItem} from "./types";

export default createContext({
    store: initialCoreState,
    addToDoItem: (value: string) => {
    },
    checkToDoItem: (id: number) => {
    },
    setToDoList: (id: ToDoItem[]) => {
    },
    clearCompleted: () => {
    },
})
