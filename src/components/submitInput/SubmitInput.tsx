import React, {ChangeEvent, memo, useId} from 'react';
import {FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField} from "@mui/material";
import SendIcon from '@mui/icons-material/Send';

type PropType = {
    label: string
    value: string
    isError?: boolean
    onChange: (event: ChangeEvent<HTMLInputElement>) => void
    dataTestId?: string
}
const SubmitInput = ({isError, onChange, value, label, dataTestId}: PropType) => {
    const id = useId()
    return (
        <FormControl fullWidth>
            <InputLabel htmlFor={id}>{label}</InputLabel>
            <OutlinedInput
                error={isError}
                value={value}
                onChange={onChange}
                data-testid={dataTestId}
                endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                            aria-label={id}
                            type='submit'
                            edge="end"
                        >
                            <SendIcon/>
                        </IconButton>
                    </InputAdornment>
                }
                label={label}
            />
        </FormControl>
    );
};

export default memo(SubmitInput);
