import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { trackListReducer } from 'modules'

export const store = configureStore({
  reducer: {},
})

export type RootState = ReturnType<typeof store.getState>