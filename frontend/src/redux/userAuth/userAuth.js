import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    email:'',
    password:'',
    username:'',
    users:null
}
const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        setEmail: (state,action) => {
            state.email = action.payload
        },
        setPassword: (state,action) => {
            state.password = action.payload
        },
        setUsername: (state,action) => {
            state.username = action.payload
        },
        // setUsers: (state,action) => {
        //     state.users.push(action.payload) 
        // },
        clearUsers: (state) => {
            state.users = []
        }
    }
})

export const { setEmail, setPassword, setUsername, setUsers, clearUsers } = usersSlice.actions
export default usersSlice.reducer
