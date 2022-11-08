import { combineReducers, configureStore } from "@reduxjs/toolkit"
import apiLoaderSlice  from "./reducers/apiLoaderSlice"
import  setUserLoginStatusSlice  from "./reducers/user-status.reducer"
import  setUserReducerSlice  from "./reducers/user-all.reducer"

export const store = configureStore({
    reducer: {
      loader: apiLoaderSlice,
      loginStatus: setUserLoginStatusSlice, 
      userDataList:setUserReducerSlice
    },
  })
  // Infer the `RootState` and `AppDispatch` types from the store itself
  export type RootState = ReturnType<typeof store.getState>
  // Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
  export type AppDispatch = typeof store.dispatch