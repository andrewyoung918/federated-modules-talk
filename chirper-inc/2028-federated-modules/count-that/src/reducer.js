import {createSlice} from '@reduxjs/toolkit'

const slice = createSlice({
  name: "count",
  initialState: [],
  increment(state) {
    state++
  }
})
export default slice;
