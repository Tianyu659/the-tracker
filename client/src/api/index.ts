import React from 'react';
import axios from 'axios';

import { formInterface, updateFormInterface } from '../common/types';

const API = axios.create({ baseURL: process.env.REACT_APP_API_URL });

API.interceptors.request.use((req) => {
    if (localStorage.getItem('profile')) {
        // localStorage.getItem('profile') already exists
        req!.headers!.Authorization = `Bearer ${JSON.parse(localStorage!.getItem('profile')!).token}`;
    }
    return req;
});


// User API
export const login = (form: formInterface) => API.post('/user/login', form);
export const signup = (form: formInterface) => API.post('/user/signup', form);
export const getAllUser = () => API.get('/user/getAllUser') // not yet implemented
export const getUserById = (id: string) => API.get(`user/uid/${id}`);
export const updateInfo = (form: updateFormInterface) => API.post('/user/updateInfo', form);
