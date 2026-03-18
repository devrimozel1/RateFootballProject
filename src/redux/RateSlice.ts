import { createSlice } from '@reduxjs/toolkit'
export interface rateSlice {
  teamname : string
}

const initialState: rateSlice = {
  teamname:"",
}

export const rateSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {

    addTeamname : (state, action) => {
        state.teamname = action.payload
    }

  
  },
})

export const { addTeamname, } = rateSlice.actions

export default rateSlice.reducer