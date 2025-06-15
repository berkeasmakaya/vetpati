import { configureStore } from "@reduxjs/toolkit";
import modalsReducer from './modalSlice';
import favoriteClinicReducer from './favoriteClinicSlice'
import userReducer from './userSlice'
import petsReducer from './petSlice';
import clinicReducer from './clinicSlice'

const store = configureStore({
    reducer:{
        modals: modalsReducer,
        favorites: favoriteClinicReducer,
        users: userReducer,
        pets:petsReducer,
        clinics: clinicReducer
    }
})

export default store;