import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const baseUrl = import.meta.env.VITE_API_BASE_URL


interface ProductsSlice {
    id: number,
    title: string,
    description: string;
    images: string[];
    price: number;
    quantity: number;
    categoryId: number;
    category: {
        id: number;
        category: string
    }
}

const initialState: ProductsSlice[] = []

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(productsAsync.fulfilled, (state, action) => {
                console.log("ALL", state)
                state = action.payload
                return state

            })
            .addCase(productByIdAsync.fulfilled, (state, action) => {
                console.log("ONE", state)
                state = action.payload
                return state

            })
    },
})

export const productsAsync = createAsyncThunk(
    'products/allProducts',
    async () => {
        try {
            const res = await axios.get(`${baseUrl}product?page=1`);
            return res.data.data

        } catch (error) {
            console.log("Error:", error)
            throw error;
        }
    },
)

export const productByIdAsync = createAsyncThunk(
    'products/oneProduct',
    async (id: number) => {
        try {
            const res = await axios.get(`${baseUrl}product/${id}`);
            return res.data.data
        } catch (error) {
            throw error
        }
    },
)

export default productsSlice.reducer