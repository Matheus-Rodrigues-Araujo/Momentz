import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
    username: string,
    profileImage: string
}

const initialState: UserState = {
    username: '',
    profileImage: '',
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action:PayloadAction<UserState>) => {
            return action.payload
        }
    }
})

export const { setUser } = userSlice.actions
export default userSlice.reducer