import React, { useState, useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Avatar, Button, Paper, Grid, Typography, Container } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';


import Input from './Input';

const initState = { firstName: '', lastName: '', email: '', password: '', confirmPassword: '' };

const Auth = () => {

    const ref = useRef(null);
    //const dispatch = useDispatch();
    
    //const navigate = useNavigate();

    const [showPassword, setShowPassword] = useState(false);
    const [isSignup, setSignup] = useState(false);
    //const [width, setWidth] = useState(0);
    const [formData, setFormData] = useState(initState);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        if (isSignup) {
            //dispatch(signup(formData, navigate));
        } else {
            //dispatch(signin(formData, navigate));
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=> {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleShowPassword = () => {
        setShowPassword((prev) => !prev);
    }

    const switchMode = () => {
        setSignup((prev) => !prev);
    }

    return (
        <Container component="main" maxWidth="xs">
            <Paper className="mt-8 flex flex-col items-center p-2" elevation={3}>
                <Avatar className="m-1 bg-black">
                    <LockOutlinedIcon />
                </Avatar>
                <Typography variant="h5">{isSignup ? "Sign Up" : "Sign In"}</Typography>
                <form style={{width: "100%", marginTop: 15}} onSubmit={handleSubmit} >
                    <Grid container spacing={2} marginBottom={3}>
                        {
                            isSignup && (
                                <>
                                    <Input name="firstName" label="First Name" onChange={handleChange} autoFocus half/>
                                    <Input name="lastName" label="Last Name" onChange={handleChange} half/>
                                </>
                            )
                        }
                        <Input name="email" label="Email" onChange={handleChange} type="email"/>
                        <Input name="password" label="Password" onChange={handleChange} type={showPassword ? "text" : "password"} handleShowPassword={handleShowPassword}/>
                        { isSignup && <Input name="confirmPassword" label="Confirm Password" onChange={handleChange} type="password"/> }
                    </Grid>
                    <Button type="submit" fullWidth variant="contained" color="primary" className="mt-3 mx-2 mb-2" ref={ref}>
                        {isSignup ? "Sign Up" : "Sign In"}
                    </Button>
                    <Grid container justifyContent="flex-end">
                        <Grid item>
                            <Button onClick={switchMode}>
                                { isSignup? "Already have an account? Sign In" : "Don't have an account? Sign Up"}
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        </Container>
    )
}

export default Auth;