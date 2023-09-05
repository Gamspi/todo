import React, {memo} from 'react';
import {Checkbox, ListItem, ListItemButton, ListItemIcon, ListItemText} from "@mui/material";

type PropType = {
    isCompleted: boolean
    value: string
    onChecked: (id: number) => void
    id: number
}
const ToDoListItem = ({isCompleted, value, onChecked, id}: PropType) => {
    return (
        <ListItem
            disablePadding
        >
            <ListItemButton role={undefined} onClick={() => onChecked(id)} dense>
                <ListItemIcon>
                    <Checkbox
                        edge="start"
                        checked={isCompleted}
                        tabIndex={-1}
                        disableRipple
                    />
                </ListItemIcon>
                <ListItemText
                    primary={value}
                    sx={{textDecoration: isCompleted ? 'line-through' : 'initial'}}
                />
            </ListItemButton>
        </ListItem>
    );
};

export default memo(ToDoListItem);
