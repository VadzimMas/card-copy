import {configureStore} from "@reduxjs/toolkit"
import {
  changeFilterTerm,
  changeCarName,
  changeCarPrice,
  clearFilterTerm,
  formReducer
} from "./formSlice"
import {
  carReducer,
  addCar,
  deleteCar,
} from "./carSlice"

const store = configureStore({
  reducer: {
    car: carReducer,
    form: formReducer,
  }
})

export {
  store,
  addCar,
  deleteCar,
  changeCarName,
  changeCarPrice,
  changeFilterTerm,
  clearFilterTerm
}