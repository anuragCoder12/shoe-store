import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    navShow: false
}
const navSlice = createSlice({
    name: "navbar",
    initialState,
    reducers: {
        toggleNavbar: (state) => {
            state.navShow = !state.navShow,
            console.log("button clicked")
        }
    }
})

export const {toggleNavbar} = navSlice.actions
export default navSlice.reducer