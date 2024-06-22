import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    loading: false,
    starredNews: localStorage.getItem("starredNews") ? JSON.parse(localStorage.getItem("starredNews")) : []
}

const newsSlice = createSlice({
    name: "news",
    initialState: initialState,
    reducers: {
        setStarredNews: (state, action) => {
            state.starredNews = action.payload;
            localStorage.setItem("starredNews", JSON.stringify(state.starredNews));
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        }
    }
});

export const { setStarredNews, setLoading } = newsSlice.actions;
export default newsSlice.reducer;