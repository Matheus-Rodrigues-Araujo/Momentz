import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Theme = 'light' | 'dark'

const themeSlice = createSlice({
    name: 'theme',
    initialState: 'dark' as Theme,
    reducers: {
        setTheme: (state, action: PayloadAction<Theme>) => {
            return action.payload
        }
    }
})

export const { setTheme } = themeSlice.actions
export default themeSlice.reducer