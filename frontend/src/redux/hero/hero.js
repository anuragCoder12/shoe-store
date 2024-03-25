import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   themeColor: 'green-500',
   bannerImage: 'src/assets/pngwing.com-39.png',
   bgColor: 'green-400' 
}
console.log(initialState)
const heroSlice = createSlice({
    name:'hero',
    initialState,
    reducers:{
        toggleThemeColor: (state,action)=>{
            state.themeColor = action.payload.themeColor;
            state.bannerImage = action.payload.bannerImage;
            state.bgColor = action.payload.bgColor;
        },
        
    }
})
export const {toggleThemeColor} = heroSlice.actions
export default heroSlice.reducer