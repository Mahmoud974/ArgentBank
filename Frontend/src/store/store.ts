import { configureStore } from "@reduxjs/toolkit"
import loginSlice from "../slice/loginSlice"
import ProfileSlice  from "../slice/profilSlice"

export const store = configureStore({
  reducer: {
    login: loginSlice,
    profile: ProfileSlice
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch