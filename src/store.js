import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import cartReducer from "./redux/cartSlice";
import productsApi from "./redux/productsApi";
import OrderApi from "./redux/OrderApi";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    [productsApi.reducerPath]: productsApi.reducer,
    [OrderApi.reducerPath]: OrderApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(productsApi.middleware)
      .concat(OrderApi.middleware),
});
setupListeners(store.dispatch);

export default store;
