import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isOpen: false,
  choise: '',
  isLoading: false,
  offset: 0
}

export const animalsSlice = createSlice({
  name: 'animals',
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
    setOffset: (state, action) => {
      state.offset = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { setIsOpen, setChoise, setIsLoading, setOffset } = animalsSlice.actions

export default animalsSlice.reducer