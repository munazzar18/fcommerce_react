import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { RootState } from "../../state/Store"
import axios from "axios"


const baseUrl = import.meta.env.VITE_API_BASE_URL

interface User {
    id: number,
    firstName: string,
    lastName: string,
    mobile: string,
    email: string,
    password: string,
    role: string,
}

const initialState: User = {
    id: 0,
    firstName: "",
    lastName: "",
    mobile: "",
    email: "",
    password: "",
    role: ""
}

export const loginAsync = createAsyncThunk('auth/login',
    async (data) => {
        try {
            const res = await axios.post(`${baseUrl}auth/login`, data)
            return res.data
        } catch (error) {

            throw error
        }
    }
)

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(loginAsync.fulfilled, (state, action) => {
                state.email = action.payload.email;
                state.password = action.payload.password;
            })
            .addCase(loginAsync.rejected, (state, action) => {
                state = action.payload as any
                return state
            })

    },
})



export const selectAllUsers = ((state: RootState) => state.users)

export default usersSlice.reducer