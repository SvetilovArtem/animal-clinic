import { configureStore } from '@reduxjs/toolkit'
import animalReducer from './slices/animalsSlice'
import appReducer from './slices/appSlice'
import todayReducer from './slices/todaySlice'

export const store = configureStore({
  reducer: {
    animalReducer,
    appReducer,
    todayReducer
  },
})