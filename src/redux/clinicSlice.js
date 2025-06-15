import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    clinicName:"",
    address:"",
    description:"",
    clinicHeaderImage:"",
    animalTypes:[]
}

const clinicSlice = createSlice({
    name:"userInfo",
    initialState,
    reducers:{
        setClinicName:(state, action)=>{
            state.clinicName = action.payload
        },
        setDescription:(state, action)=>{
            state.description = action.payload
        },
        setClinicAddress: (state, action) => {
            state.address = action.payload
        },
        setAnimalTypes: (state, action) => {
            state.animalTypes = action.payload
        },
        setClinicHeaderImage: (state, action) => {
            state.clinicHeaderImage = action.payload
        },
    }
})

export const {setClinicName, setDescription, setClinicAddress, setAnimalTypes, setClinicHeaderImage} = clinicSlice.actions
export default clinicSlice.reducer