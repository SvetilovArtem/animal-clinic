import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  login: '',
  password: '',
  token: ''  
}

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setLogin: (state, action) => {
        state.login = action.payload
    },
    setPassword: (state, action) => {
        state.password = action.payload
    },
    setToken: (state, action) => {
        state.token = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { setLogin, setPassword, setToken } = appSlice.actions

export default appSlice.reducer