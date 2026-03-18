import { configureStore } from '@reduxjs/toolkit'
import rateReducer from './RateSlice'

export const store = configureStore({
  reducer: { rateReducer },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch