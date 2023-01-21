
import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, deleteContact, addContact} from 'redux/operations';


const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {       
        items: [],
        isLoading: false,
        isAdding: false,
        error: null        
    },

    extraReducers: {
        [fetchContacts.pending](state) {            
            state.isLoading = 'fetch'
        },
        [fetchContacts.fulfilled](state, { payload }) {
            state.isLoading = false
            state.error = null
            state.items = payload
        },
        [fetchContacts.rejected](state, { payload }) {
            state.isLoading = false
            state.error = {type: 'fetch', message: payload}
        },

        [addContact.pending](state) {            
            state.isLoading = 'add'
        },
        [addContact.fulfilled](state, { payload }) {
            state.isLoading = false
            state.error = null
            state.items.push(payload)                        
        },
        [addContact.rejected](state, { payload }) {
            state.isLoading = false
            state.error = {type: 'add', message: payload}
        },

        
        [deleteContact.pending](state, action) { 
            state.isLoading = action.meta.arg
        },
        [deleteContact.fulfilled](state, { payload }) {
            state.isLoading = false
            state.error = null
            state.items = state.items.filter(item => item.id !== payload.id )                        
        },
        [deleteContact.rejected](state, action) {
            state.isLoading = false
            state.error = {id: action.meta.arg, message: action.payload}
        },
        

        
     }
    
})

export default contactsSlice.reducer;
// export const contactsReducer = createSlice.reducer;

// const contactsSlice = createSlice({
//     name: "contacts",
//     initialState: [],
//     reducers: {
//         addedContact: {
//             reducer: (store, { payload }) => {
//                 store.push(payload);
//             },
//             prepare: (data) => {
//                 return {
//                     payload: {
//                         ...data,
//                         id: nanoid()
//                     }
//                 }
//             }
//         },
//         removedContact: (store, {payload}) => store.filter(({id}) => id !== payload)
//     }
// }) 

// export const { addedContact, removedContact } = contactsSlice.actions;
// export default contactsSlice.reducer;