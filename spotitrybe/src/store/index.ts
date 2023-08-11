import { configureStore } from '@reduxjs/toolkit'
import selections from './slices/selectionsSlice'

export const store = configureStore({
  reducer: {
    selections, 
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch