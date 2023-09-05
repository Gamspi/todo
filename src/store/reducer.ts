import {coreAction, CoreActionEnum, CoreState} from "./types";

const reducer = (state: CoreState, action: coreAction) => {
    switch (action.type) {
        case CoreActionEnum.ADD_TO_DO_ITEM:
            return {...state, list: [...state.list, action.payload]}
        case CoreActionEnum.CHECK_TO_DO_ITEM:
            return {
                ...state, list: state.list.map(
                    item => (
                        item.id === action.payload ? {...item, isCompleted: !item.isCompleted} : item)
                )
            }
        case CoreActionEnum.SET_TO_DO_LIST:
            return {...state, list: action.payload}
        case CoreActionEnum.CLEAR_COMPLETED:
            return {...state, list: state.list.filter(item => !item.isCompleted)}
        default:
            return state
    }
}
export default reducer
