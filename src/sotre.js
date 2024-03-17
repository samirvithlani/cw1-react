import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./redux/CartSlice";
import contentReducer from "./redux/ContentSlice";

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        content: contentReducer,
    }
})