import React from 'react'
import { TextField, Grid, InputAdornment, IconButton } from '@mui/material'; 
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

interface InputProps {
    name: string;
    label: string;
    autoFocus?: boolean;
    type?: string;
    half?: boolean;
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    handleShowPassword?: () => void;
}

const Input: React.FC<InputProps> = ({ name, label, autoFocus, type, half=false, onChange, handleShowPassword }) => {
  return (
    <Grid item xs={12} sm={half ? 6 : 12}>
        <TextField 
            name={name}
            onChange={onChange}
            variant="outlined"
            required
            fullWidth
            label={label}
            autoFocus={autoFocus}
            type={type}
            InputProps={name === 'password' ? {
                endAdornment: (
                   <InputAdornment position="end">
                       <IconButton onClick={handleShowPassword}>
                           {type ==="password" ? <Visibility /> : <VisibilityOff />}
                       </IconButton>
                   </InputAdornment> 
                )
            } : undefined}
        />
    </Grid>
  )
}

export default Input;