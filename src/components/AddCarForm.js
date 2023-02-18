import {useDispatch, useSelector} from "react-redux";
import {addCar, changeCarName, changeCarPrice} from "../store";

function AddCarForm() {
  const dispatch = useDispatch()

  const {carName, carPrice} = useSelector((state) => {
    return {
      carName: state.form.name,
      carPrice: state.form.price
    }
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(addCar({carName, carPrice}))
  }

  const handleCarNameChange = (e) => {
    dispatch(changeCarName(e.target.value))
  }

  const handleCarPriceChange = (e) => {
    dispatch(changeCarPrice(e.target.value))
  }

  return (
    <form
      onSubmit={handleSubmit}
    >
      <fieldset>
        <label>Car Name: </label>
        <input
          value={carName}
          onChange={handleCarNameChange}
        />
        <label>Car Cost: </label>
        <input
          value={carPrice}
          type="number"
          onChange={handleCarPriceChange}
        />
        <button>Add Car</button>
      </fieldset>
    </form>
  )
}

export default AddCarForm