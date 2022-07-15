import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NavigateFunction } from 'react-router-dom';

import * as api from '../../api';
import { formInterface } from '../../common/types';

export interface ThemeState {
    // Customize it as you like -- the info of the user that we will keep on the frontend
    status: 'idle' | 'loading' | 'succeeded' | 'failed',
    error: string | null
    user: {
        username: string;
        email: string;
        id: string;
    } | null;
}

export const initialState: ThemeState = {
    user: null,
    status: 'idle',
    error: null
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        // without APi fetching
    },
    extraReducers(builder) {
        builder
            .addCase(signup.pending, (state, action) => {
                state.status = 'loading';    
            })
            .addCase(signup.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.user = action.payload;
            })
            .addCase(signup.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message!;
            })
    }
});

export const signup = createAsyncThunk('user/signup', async ({ form, navigate }: {form: formInterface, navigate: NavigateFunction}) => {
    // making API request
    const { data } = await api.signup(form);


    // navigate to home screen at /user/user
    navigate('../user/user');


    // return action.payload
    return data.userResult;
})


export const {  } = userSlice.actions;

export default userSlice.reducer;