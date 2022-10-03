import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isOpen: false,
  choise: '',
  isLoading: false,
}

export const todaySlice = createSlice({
  name: 'today',
  initialState,
  reducers: {
    setIsOpen: (state, action) => {
        state.isOpen = action.payload
    },
    setChoise: (state, action) => {
      state.choise = action.payload
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setIsOpen, setChoise, setIsLoading } = todaySlice.actions

export default todaySlice.reducer