import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user: [],
};

const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        loginUser: (state, action) => {
            state.user.push({
                id: Date.now(),
                text: action.payload,
            })
        }
    }
})

export const { loginUser } = loginSlice.actions;

export default loginSlice.reducer;