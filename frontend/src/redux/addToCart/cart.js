import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartCount: 0,
    quantity: 1,
    cartItems: [],
    totalPrice: 0
}
const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addCartItem: (state,action) => {
            const { productName, image, price, id } = action.payload
            const existingItem = state.cartItems.find(item => item.id === id);
            if (existingItem) {
                existingItem.quantity++;
            } else {
                state.cartItems.push({ title: productName, image, price, id, quantity: 1 });
            }
            state.cartCount = state.cartItems.length;    
        },
        incrementQuantity: (state) => {
            state.quantity+=1  
        },
        decrementQuantity: (state) => {
            state.quantity-=1
        },
        removeFromCart: (state,action) => {
            state.cartItems = state.cartItems.filter(item => item.id !== action.payload)
            state.cartCount -=1
            console.log("deleted")
        },
        setTotalPrice: () => {
            
        }
        
    }
})

export const { addCartItem, incrementQuantity, decrementQuantity, removeFromCart } =  cartSlice.actions
export default cartSlice.reducer