export type ToDoItem = {
    id: number,
    value: string,
    isCompleted: boolean
}
export type CoreState = {
    list: ToDoItem[],
}

export enum CoreActionEnum {
    SET_TO_DO_LIST = 'SET_TO_DO_LIST',
    ADD_TO_DO_ITEM = 'ADD_TO_DO_ITEM',
    CHECK_TO_DO_ITEM = 'CHECK_TO_DO_ITEM',
    CLEAR_COMPLETED = 'CLEAR_COMPLETED'
}

export interface addToDoItemAction {
    type: CoreActionEnum.ADD_TO_DO_ITEM,
    payload: ToDoItem
}

export interface checkToDoItemAction {
    type: CoreActionEnum.CHECK_TO_DO_ITEM,
    payload: number
}

export interface setToDoListAction {
    type: CoreActionEnum.SET_TO_DO_LIST,
    payload: ToDoItem[]
}

export interface clearCompletedAction {
    type: CoreActionEnum.CLEAR_COMPLETED
}

export type coreAction =
    clearCompletedAction |
    checkToDoItemAction |
    addToDoItemAction |
    setToDoListAction
