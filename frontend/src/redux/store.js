import { configureStore } from "@reduxjs/toolkit";
import { productApi } from "./api/productsApi";
import { userApi } from "./api/userApi";
import cartReducer from "./features/cart/cartSlice";


export const store = configureStore({
    reducer: {
        [productApi.reducerPath]: productApi.reducer,
        [userApi.reducerPath]: userApi.reducer,
        cart: cartReducer // ✅ cart slice-i buraya əlavə et
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat([
            productApi.middleware,
            userApi.middleware
        ])
});
