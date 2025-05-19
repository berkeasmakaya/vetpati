import { createSlice } from "@reduxjs/toolkit";

const favoriteClinicSlice = createSlice({
    name:"favorites",
    initialState:{
        clinics: [],
    },
    reducers:{
        addFavorite: (state, action) => {
            const clinic = action.payload;
            const exists = state.clinics.find(item => item.id === clinic.id);
            if (!exists) {
                state.clinics.push(clinic);
            }
        },
        removeFavorite: (state, action) => {
            const clinicId = action.payload;
            state.clinics = state.clinics.filter(item=>item.id !== clinicId);
        },
    }
})

export const {addFavorite, removeFavorite} = favoriteClinicSlice.actions;
export default favoriteClinicSlice.reducer