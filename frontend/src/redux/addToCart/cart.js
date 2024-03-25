import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartCount: 0,
    quantity: 1,
    cartItems: []
}
const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addCartItem: (state,action) => {
            const { productName, image, price } = action.payload
            state.cartItems.push({ title:productName, image, price }),
            state.cartCount+=1
        },
        incrementQuantity: (state) => {
            state.quantity+=1  
        },
        decrementQuantity: (state) => {
            state.quantity-=1
        }
        
    }
})

export const { addCartItem, incrementQuantity, decrementQuantity } =  cartSlice.actions
export default cartSlice.reducer