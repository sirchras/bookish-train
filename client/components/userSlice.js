import { createSlice } from '@reduxjs/toolkit'
import { isAuthenticated, getDecodedToken } from 'authenticare/client'

const userSlice = createSlice({
  name: 'user',
  initialState: {
    name: getUser()
  },
  reducers: {
    setUser: (state, action) => {
      state.name = action.payload
    }
  }
})

export function getUser () {
  if (isAuthenticated()) {
    const decoded = getDecodedToken()
    console.log(decoded)
    return decoded
  }
  return null
}

const { actions, reducer } = userSlice
export const { setUser } = actions
export default reducer
