import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: boolean = false;
export const apiLoaderSlice = createSlice({
    name: 'loader',
    initialState,
    reducers: {
        apiLoader: (state, action: PayloadAction<boolean>) => {
            return action.payload
        }
    }
})

export default apiLoaderSlice.reducer