import { configureStore } from '@reduxjs/toolkit'

import postsSlice from './components/feed/postsSlice'

const store = configureStore({
  reducer: {
    posts: postsSlice
  }
})

export default store
