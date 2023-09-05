import React, {memo} from 'react';
import './style.scss'
import {
    List,
    Button,
    Container,
    ToggleButton,
    ToggleButtonGroup
} from "@mui/material";

import {useController} from "./useController";
import ToDoListItem from "../../components/toDoListItem/ToDoListItem";
import SubmitButton from "../../components/submitInput/SubmitInput";

const AppLayout = () => {
    const {
        computedList,
        toDoInput,
        filterList,
        filterValue,
        handelAddItem,
        handelCheckItem,
        handelFilterChange,
        handelSetToDoValue,
        handelClearCompleted
    } = useController()
    return (
        <Container maxWidth="lg" className='app-layout'>
            <header>
                <h1>Todos</h1>
            </header>

            <main>
                <form className='app-layout__form' onSubmit={handelAddItem}>
                    <SubmitButton
                        value={toDoInput.value}
                        isError={toDoInput.isError}
                        onChange={handelSetToDoValue}
                        label='What needs to be done?'
                    />
                </form>
                <div className='app-layout__actions'>
                    <ToggleButtonGroup
                        color="primary"
                        value={filterValue}
                        exclusive
                        onChange={handelFilterChange}
                    >
                        {filterList.map(item => (
                            <ToggleButton value={item.value}>{item.label}</ToggleButton>
                        ))}
                    </ToggleButtonGroup>
                    <Button variant="contained" onClick={handelClearCompleted}>Clear completed</Button>
                </div>
                <List className='app-layout__list'>
                    {computedList.map(item => (
                        <ToDoListItem
                            isCompleted={item.isCompleted}
                            id={item.id}
                            key={item.id}
                            onChecked={handelCheckItem}
                            value={item.value}
                        />
                    ))}
                </List>
            </main>
        </Container>
    );
};

export default memo(AppLayout);
