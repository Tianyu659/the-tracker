import { configureStore } from '@reduxjs/toolkit';

import themeReducer from '../feature/theme/themeSlice';

/**
 * This is the Redux store, containing the reducers and the global state of the app.
 */
export const store = configureStore({
    reducer: {
        theme: themeReducer,
    }
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type
export type AppDispatch = typeof store.dispatch