import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    users: []
}

const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
    reducers: {
        setUsers(state, action) {
            state.users = action.payload;
        },
        addUser(state, action) {
            state.users.push(action.payload);
        },
        deleteUser(state, action) {
            state.users.splice(action.payload, 1);
        },
        updateUser(state, action) {
            const { index, user } = action.payload;
            state.users[index] = user;
        },
    },
});

export const { setUsers, addUser, deleteUser, updateUser } = contactsSlice.actions;
export default contactsSlice.reducer;