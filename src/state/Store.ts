import { configureStore } from "@reduxjs/toolkit";
import ProductsSlice from "../features/products/Products.slice";
// import postReducer from "../features/posts/post.slice";
import usersReducer from "../features/users/users.slice";

export const store = configureStore({
    reducer: {
        products: ProductsSlice,
        // posts: postReducer,
        users: usersReducer
    }
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch 