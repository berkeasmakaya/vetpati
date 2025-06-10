import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    firstName:"",
    lastName:"",
    phoneNumber:"",
    address:"",
}

const userSlice = createSlice({
    name:"userInfo",
    initialState,
    reducers:{
        setFirstName:(state, action)=>{
            state.firstName = action.payload
        },
        setLastName:(state, action)=>{
            state.lastName = action.payload
        },
        setPhoneNumber: (state, action) => {
            state.phoneNumber = action.payload
        },
        setAddress: (state, action) => {
            state.address = action.payload
        },
        updateUserInfo: (state, action) => {
            const updates = action.payload;
            Object.entries(updates).forEach(([key, value]) => {
                if (state.hasOwnProperty(key)) {
                    state[key] = value;
                }
            });
        },
    }
})

export const {setFirstName, setLastName, setAddress, setPhoneNumber, updateUserInfo} = userSlice.actions
export default userSlice.reducer