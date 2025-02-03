import { configureStore } from "@reduxjs/toolkit"
import taskSlice from "./taskSlice"

export const store = configureStore({
    reducer: {
        task: taskSlice,

    }
})

// export type RootState = typeof store.getState;
// export type AddDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch