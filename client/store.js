import { configureStore } from '@reduxjs/toolkit'

import postsSlice from './components/Feed/postsSlice'

const store = configureStore({
  reducer: {
    posts: postsSlice
  }
})

export default store
