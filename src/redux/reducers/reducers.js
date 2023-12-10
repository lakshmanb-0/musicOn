import { createSlice } from "@reduxjs/toolkit"
import { InitialStore } from "../store/InitialStore"


const authSlice = createSlice({
    name: 'Reducer',
    initialState: InitialStore.data,
    reducers: {
        tokenCookie: (state, action) => {
            state.user = {
                requestId: action.payload.requestId,
                token: action.payload.token,
            }
            localStorage.setItem('user', JSON.stringify(state.user))
        },
        logOut: (state) => {
            state.user = {
                requestId: '',
                token: '',
            }
            localStorage.clear()
        },
        addSong: (state, action) => {
            state.songList = [...state.songList, action.payload]
        },
        deleteSong: (state, action) => {
            state.songList = state.songList.filter(el => el?.link == action.payload);
            state.currentSong = state.currentSong.imageLink == action.payload ? {} : state.currentSong
        },
        setCurrentSong: (state, action) => {
            state.currentSong = action.payload
        }
    },
})

export const { tokenCookie, logOut, addSong, setCurrentSong, deleteSong } = authSlice.actions

export default authSlice.reducer