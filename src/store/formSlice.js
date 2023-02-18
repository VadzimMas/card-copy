import {createSlice} from "@reduxjs/toolkit";
import {addCar} from "./carSlice";

const formSlice = createSlice({
  name: "form",
  initialState: {
    name: '',
    price: '',
    filterTerm: '',
  },
  reducers: {
    changeCarName(state, action) {
      state.name = action.payload
    },
    changeCarPrice(state, action) {
      state.price = action.payload
    },
    changeFilterTerm(state, action) {
      state.filterTerm = action.payload
    },
    clearFilterTerm(state) {
      state.filterTerm = ''
    }
  },
  extraReducers(builder) {
    builder.addCase(addCar, (state) => {
      state.name = ''
      state.price = ''
    })
  }
})

export const {
  changeFilterTerm,
  changeCarName,
  changeCarPrice,
  clearFilterTerm
} = formSlice.actions
export const formReducer = formSlice.reducer