import React, {memo, ReactNode, useReducer} from 'react';
import Context from "./context";
import reducer from "./reducer";
import {initialCoreState} from "./state";
import {CoreActionEnum, ToDoItem} from "./types";

type PropsType = {
    children?: ReactNode
}
const Provider = (props: PropsType) => {
    const [store, dispatch] = useReducer(reducer, initialCoreState)
    const addToDoItem = (value: string) => {
        const payload = {
            value,
            id: ~~(Math.random() * Date.now()),
            isCompleted: false
        }
        dispatch({type: CoreActionEnum.ADD_TO_DO_ITEM, payload})
    }
    const checkToDoItem = (payload: number) => {
        dispatch({type: CoreActionEnum.CHECK_TO_DO_ITEM, payload})
    }
    const setToDoList = (payload: ToDoItem[]) => {
        dispatch({type: CoreActionEnum.SET_TO_DO_LIST, payload})
    }
    const clearCompleted = () => {
        dispatch({type: CoreActionEnum.CLEAR_COMPLETED})
    }
    return (<Context.Provider {...props} value={{store, addToDoItem, checkToDoItem, setToDoList, clearCompleted}}/>);
};

export default memo(Provider);
