import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const initialState={
    userData: []
}

export const setUserReducerSlice = createSlice({
    name:"userDataList",
    initialState:initialState,
    reducers:{
        addUserData:(state:any,action:PayloadAction<any>)=>{
            return {...state,userData:[...state.userData,...action.payload]}         
        },
        userFavorite:(state,action:PayloadAction<any>)=>{
            let favoriteArray:any = [...state?.userData]; 
            let index = state?.userData.findIndex((el:any) => el?.login?.username === action.payload);
            favoriteArray[index] = {...favoriteArray[index], status: true}; 
            return  {...state,userData:favoriteArray}
        },
        userUnFavorite:(state,action:PayloadAction<any>)=>{
            let UnfavoriteArray:any = [...state?.userData]; 
            let index = state?.userData.findIndex((el:any) => el?.login?.username === action.payload);
            UnfavoriteArray[index] = {...UnfavoriteArray[index], status: false}; 
            return  {...state,userData:UnfavoriteArray}
        },
        deleteUnFavorite:(state,action:PayloadAction<any>)=>{
         return {...state,userData:state.userData.filter((item:any)=>item.status!==action.payload)}
        },
        resetUserData:(state,action:PayloadAction<any>)=>{
            return initialState
        }
        
    }
})

export default setUserReducerSlice.reducer