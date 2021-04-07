import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import api from '../../api/posts'

// fetchPosts thunk
const fetchPosts = createAsyncThunk(
  'posts/fetchPosts',
  async () => {
    const posts = await api.getAllPosts()
    return posts
  }
)

const makePost = createAsyncThunk(
  'posts/makePost',
  async (post) => {
    const res = await api.addNewPost(post)
    return res
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
    },
    [makePost.pending]: state => {
      state.loading = 'pending'
    },
    [makePost.fulfilled]: (state, action) => {
      state.loading = 'idle'
      state.posts.push(action.payload)
    },
    [makePost.rejected]: (state, action) => {
      state.loading = 'idle'
      console.error(action)
    }
  }
})

export { fetchPosts, makePost }
export default postsSlice.reducer
