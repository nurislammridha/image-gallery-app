import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getPosts } from "./createAction"
import { getData } from "../assets/functions/helperFunctions"

const initialState = {
    posts: [],
    isLoading: false,
    isError: false,
    error: null
}
export const fetchPosts = createAsyncThunk('posts/fetchPosts',
    async () => {
        const posts = await getPosts()
        return posts.slice(0, 50)
    }
)
const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        offlineMode: (state, action) => {
            state.isLoading = false
            state.posts = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchPosts.pending, (state, action) => {
                state.isLoading = true
                state.isError = false
            })
            .addCase(fetchPosts.fulfilled, (state, action) => {
                state.isLoading = false,
                    state.posts = action.payload
            })
            .addCase(fetchPosts.rejected, (state, payload) => {
                state.isLoading = false,
                    state.isError = true,
                    state.error = action.error?.message,
                    state.posts = getData()
            })
    }
})
export const { offlineMode } = postsSlice.actions
export default postsSlice.reducer