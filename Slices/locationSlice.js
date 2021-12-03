import { createSlice } from '@reduxjs/toolkit'
const initialState={
    origin:null,
}
export const locationSlice = createSlice({
    name: 'location',
    initialState,
    reducers: {
      
      setOrigin: (state, action) => {
        state.origin = action.payload
      },
    }
  })
  
  // Action creators are generated for each case reducer function
  export const {setOrigin } = locationSlice.actions;
  //Selectors
  export const selectOrigin =(state)=>state.location.origin;

  export default locationSlice.reducer