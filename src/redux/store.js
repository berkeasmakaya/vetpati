import { configureStore } from "@reduxjs/toolkit";
import modalsReducer from './modalSlice';
import favoriteClinicReducer from './favoriteClinicSlice'

const store = configureStore({
    reducer:{
        modals: modalsReducer,
        favorites: favoriteClinicReducer,
    }
})

export default store;