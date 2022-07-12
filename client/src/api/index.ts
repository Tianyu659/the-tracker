import React from 'react';
import axios from 'axios';

const API = axios.create({ baseURL: process.env.REACT_APP_API_URL });

API.interceptors.request.use((req) => {
    if (localStorage.getItem('profile')) {
        // localStorage.getItem('profile') already exists
        req!.headers!.Authorization = `Bearer ${JSON.parse(localStorage!.getItem('profile')!).token}`;
    }
    return req;
});