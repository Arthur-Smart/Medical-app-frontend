import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  currentUser:null,
  isFetching:false,
  error:false
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginStart: (state) => {
        state.isFetching = true
    },
    loginSuccess: (state, action) => {
        state.isFetching = false
        state.currentUser= action.payload
    },
    loginFail:(state) => {
        state.isFetching = false
        state.error = true
    },
    logout: (state) => {
        return initialState;
    }
  },
});

export const {loginStart, loginSuccess, loginFail} = userSlice.actions
export default userSlice.reducer