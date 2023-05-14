import { createSlice } from '@reduxjs/toolkit'

export const homeSlice = createSlice({
  name: 'homeSlice',
  initialState: {
    value: 0,
  },
  reducers: {
    getTopChart: () => {

    }
   },
})

// Action creators are generated for each case reducer function
export const { getTopChart } = homeSlice.actions

export default homeSlice.reducer