import { configureStore } from "@reduxjs/toolkit";
import navReducer from "../navbar/navbar"
import heroReducer from '../hero/hero'
import apiReducer from '../api/Api'
import cartReducer from '../addToCart/cart'
import usersReducer from '../userAuth/userAuth'
 const store = configureStore({
    reducer:{
        navbar: navReducer,
        hero: heroReducer,
        api: apiReducer,
        cart: cartReducer,
        users: usersReducer
    }
})

export default store