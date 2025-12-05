import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../slice/productSlice";  
import cartReducer from "../slice/cartSlice";        

const store = configureStore({
  reducer: {
    products: productReducer,
    cart: cartReducer,
  },
});

export default store;
