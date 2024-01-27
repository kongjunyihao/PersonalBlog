import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counter/counterSlice";
import postsReducer from "./features/posts/postsSlice";
import usersReducer from "./features/users/usersSlice";

// export const sliceCounterStore = configureStore({
//     reducer: {
//         counter: counterReducer,
//     }
// })

export const postsStore = configureStore({
    reducer: {
        posts: postsReducer,
        users: usersReducer
    }
})