import {createSlice, nanoid} from "@reduxjs/toolkit";

const carSlice = createSlice({
  name: 'car',
  initialState: {
    carList: [
      {name: 'Volvo', price: 14500, id: nanoid()},
      {name: 'Ford', price: 12350, id: nanoid()},
      {name: 'Dodge', price: 11530, id: nanoid()},
      {name: 'Nissan', price: 14200, id: nanoid()},
      {name: 'Mazda', price: 16900, id: nanoid()},
      {name: 'Jeep', price: 12100, id: nanoid()},
      {name: 'Buiq', price: 15200, id: nanoid()},
      {name: 'BMW', price: 16700, id: nanoid()},
    ]
  },
  reducers: {
    addCar(state, action) {
      state.carList.push({
        name: action.payload.carName,
        price: action.payload.carPrice,
        id: nanoid()
      })
    },
    deleteCar(state, action) {
      state.carList = state.carList.filter((car) => {
        return car.id !== action.payload
      })
    },
  }
})

export const {
  addCar,
  deleteCar,
} = carSlice.actions
export const carReducer = carSlice.reducer
