import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isEditUserModalVisible: false,
    isAddPawModalVisible:false,
    isEditPawModalVisible: false,
}

const modalSlice = createSlice({
    name:"modals",
    initialState,
    reducers: {
        openEditUserModal: (state) => {
          state.isEditUserModalVisible = true;
        },
        closeEditUserModal: (state) => {
          state.isEditUserModalVisible = false;
        },
        openAddPawModal: (state) => {
          state.isAddPawModalVisible = true;
        },
        closeAddPawModal: (state) => {
          state.isAddPawModalVisible = false;
        },
        openEditPawModal: (state) => {
            state.isEditPawModalVisible = true;
        },
        closeEditPawModal: (state) => {
            state.isEditPawModalVisible = false;
        }
      },
});

export const {openEditUserModal, closeEditUserModal, openAddPawModal, closeAddPawModal, openEditPawModal, closeEditPawModal} = modalSlice.actions
export default modalSlice.reducer;