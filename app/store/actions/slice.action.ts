import { apiLoaderSlice } from "../reducers/apiLoaderSlice";
import { setUserReducerSlice } from "../reducers/user-all.reducer";
import { setUserLoginStatusSlice } from "../reducers/user-status.reducer";


// API Loader Reducer
export const {apiLoader} = apiLoaderSlice.actions

//  login status action
export const {setUserLoginStatus} = setUserLoginStatusSlice.actions


// all user data controller 
export const {addUserData,userFavorite,userUnFavorite,deleteUnFavorite,resetUserData} = setUserReducerSlice.actions