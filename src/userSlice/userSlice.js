import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    username: "",
    email: "",
    photo: ""
}
const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setSignIn: (state, action) => {
            state.username = action.payload.username;
            state.email = action.payload.email;
            state.photo = action.payload.photo;
        },
        setSignOut: (state) => {
            state.username = "";
            state.email = "";
            state.photo = ""
        }
    }
})
export const selectUserName = (state) => state.user.username;
export const selectEmail = (state) => state.user.email;
export const selectPhoto = (state) => state.user.photo;
export const { setSignIn, setSignOut } = userSlice.actions;
export default userSlice.reducer