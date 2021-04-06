import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import auth from 'authenticare/client'

import { baseUrl } from '../config'

const signIn = createAsyncThunk(
  'user/signIn',
  async ({ user, navigateTo }) => {
    await auth.signIn(user, { baseUrl })
    const name = getUser()

    if (!name) throw new Error('not authenticated')

    navigateTo('/')
    return name
  }
)

const register = createAsyncThunk(
  'user/register',
  async ({ user, navigateTo }) => {
    await auth.register(user, { baseUrl })
    const name = getUser()

    if (!name) throw new Error('not authenticated')

    navigateTo('/')
    return name
  }
)

const userSlice = createSlice({
  name: 'user',
  initialState: {
    loading: 'idle',
    name: getUser()
  },
  reducers: {},
  extraReducers: {
    [signIn.pending]: state => {
      state.loading = 'pending'
    },
    [signIn.fulfilled]: (state, action) => {
      state.loading = 'idle'
      state.name = action.payload
    },
    [signIn.rejected]: (state, action) => {
      state.loading = 'idle'
      console.error(action)
    },
    [register.pending]: state => {
      state.loading = 'pending'
    },
    [register.fulfilled]: (state, action) => {
      state.loading = 'idle'
      state.name = action.payload
    },
    [register.rejected]: (state, action) => {
      state.loading = 'idle'
      console.error(action)
    }
  }
})

export function getUser () {
  if (auth.isAuthenticated()) {
    const { name } = auth.getDecodedToken()
    return name
  }
  return null
}

export { signIn, register }
export default userSlice.reducer
