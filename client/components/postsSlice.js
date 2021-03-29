import { createSlice } from '@reduxjs/toolkit'

import { getAllPosts } from '../api/posts'

const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    loading: 'idle',
    posts: []
  },
  reducers: {
    postsLoading: state => {
      if (state.loading === 'idle') {
        state.loading = 'pending'
      }
    },
    postsReceived: (state, action) => {
      if (state.loading === 'pending') {
        state.loading = 'idle'
        state.posts = action.payload
      }
    }
  }
})

export default postsSlice.reducer

export const { postsLoading, postsReceived } = postsSlice.actions

// fetchPosts thunk
export const fetchPosts = () => async dispatch => {
  dispatch(postsLoading())
  const posts = await getAllPosts()
  dispatch(postsReceived(posts))
}
