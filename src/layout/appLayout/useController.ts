import {useCoreContext} from "../../hooks/useCoreSelector";
import {ChangeEvent, FormEvent, MouseEvent, useEffect, useMemo, useState} from "react";
import {ToDoFilterEnum} from "../../helpers/enum/toDoRadioEnum";

export const useController = () => {
    const [toDoInput, setToDoInput] = useState({
        value: '',
        isError: false
    })
    const [filterValue, setFilterValue] = useState(ToDoFilterEnum.ALL)
    const {
        store: {list},
        addToDoItem,
        setToDoList,
        checkToDoItem,
        clearCompleted
    } = useCoreContext()

    const filterList = [
        {
            value: ToDoFilterEnum.ALL,
            label: 'all'
        },
        {
            value: ToDoFilterEnum.IS_COMPLETED,
            label: 'Completed'
        },
        {
            value: ToDoFilterEnum.ACTIVE,
            label: 'Active'
        },

    ]

    const computedList = useMemo(() => {
        switch (filterValue) {
            case ToDoFilterEnum.ACTIVE:
                return list.filter(item => !item.isCompleted)
            case ToDoFilterEnum.IS_COMPLETED:
                return list.filter(item => item.isCompleted)
            default:
                return list
        }

    }, [filterValue, list])

    const handelSetToDoValue = (e: ChangeEvent<HTMLInputElement>) => {
        setToDoInput({isError: false, value: e.target.value})
    }
    const handelAddItem = (e?: FormEvent<HTMLFormElement>) => {
        if (e) e.preventDefault()
        if (!toDoInput.value.trim()) return setToDoInput(prev => ({...prev, isError: true}))
        addToDoItem(toDoInput.value)
        setToDoInput({isError: false, value: ''})
    }
    const handelCheckItem = (id: number) => {
        checkToDoItem(id)
    }
    const handelFilterChange = (_: MouseEvent<HTMLElement>, value: any) => {
        setFilterValue(value as ToDoFilterEnum)
    }
    const handelClearCompleted = () => {
        clearCompleted()
    }

    useEffect(() => {
        const list = localStorage.getItem('list')
        if (!list) return
        setToDoList(JSON.parse(list))
    }, [])

    useEffect(() => {
        if (list) localStorage.setItem('list', JSON.stringify(list))
    }, [list])
    return {
        toDoInput,
        filterList,
        filterValue,
        computedList,
        handelAddItem,
        handelCheckItem,
        handelSetToDoValue,
        handelFilterChange,
        handelClearCompleted
    }
}
