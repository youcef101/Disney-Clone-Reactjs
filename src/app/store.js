import { configureStore } from '@reduxjs/toolkit'
import movieReducer from '../MovieSlice/movieSlice'
import userReducer from '../userSlice/userSlice'

export default configureStore({
  reducer: {
    movie: movieReducer,
    user: userReducer
  },
})