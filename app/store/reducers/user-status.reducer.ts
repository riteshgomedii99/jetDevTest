import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: any = null

export const setUserLoginStatusSlice = createSlice({
  name: 'loginStatus',
  initialState,
  reducers: {
    setUserLoginStatus: (state, action: PayloadAction<any>) => {
      return action.payload;
    }
  }
})

export default setUserLoginStatusSlice.reducer