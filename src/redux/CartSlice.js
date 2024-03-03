import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
}
const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        //state --> current state
        //action -->type
        //action.payload --> 
        addToCart:(state,action)=>{
            console.log("action",action)
            //console.log("state",state)
            state.items.push(action.payload)
        }
    }
})

export const {addToCart} = cartSlice.actions
export default cartSlice.reducer