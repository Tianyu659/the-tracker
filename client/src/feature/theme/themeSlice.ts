import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ThemeState {
    activeMenu: boolean;
    screenSize: number;
    themeColor: string;
    mode: string;
}

export const initialState: ThemeState = {
    activeMenu: false,
        screenSize: 1920,
        themeColor: '#03C9D7',
        mode: "light",
}

export const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        setActiveMenu: (state, { payload }: PayloadAction<boolean>) => {
            state.activeMenu = payload;
        },
        setScreenSize: (state, { payload }: PayloadAction<number>) => {
            state.screenSize = payload;
        },
        setThemeColor: (state, { payload }: PayloadAction<string>) => {
            state.themeColor = payload;
        },
        setMode: (state, { payload }: PayloadAction<string>) => {
            state.mode = payload;
        }

    }
});

export const { setActiveMenu, setScreenSize, setThemeColor, setMode } = themeSlice.actions;

export default themeSlice.reducer;