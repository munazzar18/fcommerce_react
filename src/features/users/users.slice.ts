import { createSlice } from "@reduxjs/toolkit"
import { RootState } from "../../state/Store"


const initialState = [
    { id: 1, name: 'Dude Lebowski' },
    { id: 2, name: 'Neil Young' },
    { id: 3, name: 'Dave Gray' }
]

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {}
})

export const selectAllUsers = ((state: RootState) => state.users)

export default usersSlice.reducer