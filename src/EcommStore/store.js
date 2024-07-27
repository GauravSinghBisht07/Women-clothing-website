import { configureStore } from '@reduxjs/toolkit'
import reducer from '../Features/EcomSlice'
export const Store = configureStore({
    reducer : reducer
})