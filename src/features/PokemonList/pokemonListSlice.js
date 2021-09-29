import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: 0,
}

export const counterSlice = createSlice({
    name: 'pokemonList',
    initialState,
    reducers: {
    },
})

// Action creators are generated for each case reducer function
export const {  } = counterSlice.actions

export default counterSlice.reducer