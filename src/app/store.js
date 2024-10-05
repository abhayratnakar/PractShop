import { configureStore } from "@reduxjs/toolkit";
import sliderReducer from "../features/Slice/SliderSlice";  // Import the slice reducer
import ProductSlice from "../features/Slice/ProductSlice";
import cartReducer from "../features/Slice/CartSlice";
import authReducer from "../features/Slice/authSlice";


export const store = configureStore({
  reducer: {
    slider: sliderReducer,
    products: ProductSlice,
    cart: cartReducer,
    user: authReducer
  }
});