import { createSlice } from '@reduxjs/toolkit'

interface UserInfo {
  uid: number
  name: string
  email: string
  age: number
  address: string
}

export const userSlice = createSlice({
  name: 'user',

  initialState: {
    uid: 0,
    name: '',
    email: '',
    age: 0,
    address: ''
  } as UserInfo,
  reducers: {
    changeName(state, action) {
      state.name = action.payload
    }
  }
})

export const { changeName } = userSlice.actions
export default userSlice.reducer
