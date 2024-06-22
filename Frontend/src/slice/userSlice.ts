import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
    email: string;
    token: string | null;
}

const initialState: UserState = {
    email: '',
    token: null,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<{ email: string; token: string }>) => {
            state.email = action.payload.email;
            state.token = action.payload.token;
        },
        clearUser: (state) => {
            state.email = '';
            state.token = null;
        },
    },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
