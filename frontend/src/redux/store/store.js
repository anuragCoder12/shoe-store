import { configureStore } from "@reduxjs/toolkit";
import navReducer from "../navbar/navbar"
import heroReducer from '../hero/hero'
import apiReducer from '../api/Api'
import cartReducer from '../addToCart/cart'
 const store = configureStore({
    reducer:{
        navbar: navReducer,
        hero: heroReducer,
        api: apiReducer,
        cart: cartReducer
    }
})

export default store