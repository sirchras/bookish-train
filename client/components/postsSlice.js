import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import posts from '../api/posts'

// fetchPosts thunk
const fetchPosts = createAsyncThunk(
  'posts/fetchPosts',
  async (api = posts) => {
    const posts = await api.getAllPosts()
    return posts
  }
)

const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    loading: 'idle',
    posts: []
  },
  reducers: {},
  extraReducers: {
    [fetchPosts.pending]: state => {
      state.loading = 'pending'
    },
    [fetchPosts.fulfilled]: (state, action) => {
      state.loading = 'idle'
      state.posts = action.payload
    },
    [fetchPosts.rejected]: (state, action) => {
      state.loading = 'idle'
      console.error(action)
    }
  }
})

export { fetchPosts }
export default postsSlice.reducer
