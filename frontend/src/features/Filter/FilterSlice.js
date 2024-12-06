import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: [],
    isFilter: false,
    article: '',
    value: [null, null],
    weight: [0, 1000],
    carat: [0, 1000],
    price: [0, 100000],
    prodPrice: [0, 100000],
};

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        changeFilter: (state, action) => {
            state.isFilter = action.payload
        },
        setArticle: (state, action) => {
            state.article = action.payload
        },
        setFiltredData: (state, action) => {
            state.data = action.payload
        },
        resetFilter: (state, _) => {
            state.isFilter = false
            state.data = []
        },
        setValue: (state, action) => {
            state.value = action.payload
        },
        setWeight: (state, action) => {
            state.weight = action.payload
        },
        setCarat: (state, action) => {
            state.carat = action.payload
        },
        setPrice: (state, action) => {
            state.price = action.payload
        },
        setprodPrice: (state, action) => {
            state.prodPrice = action.payload
        },
    }
})

export const { changeFilter, resetFilter, setFiltredData, setValue, setWeight,
    setCarat, setPrice, setprodPrice, setArticle } = filterSlice.actions
export default filterSlice.reducer;