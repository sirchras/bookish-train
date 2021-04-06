import { configureStore } from '@reduxjs/toolkit'

import postsSlice from './components/feed/postsSlice'
import userSlice from './components/userSlice'

const store = configureStore({
  reducer: {
    posts: postsSlice,
    user: userSlice
  }
})

export default store
