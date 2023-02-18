import {useDispatch, useSelector} from "react-redux";
import {deleteCar} from "../store";

function ShowCars() {

  const {cars, filterTerm} = useSelector(({car: {carList}, form: {filterTerm}}) => {
    return {
      cars: carList.filter((car) => car.name.toLowerCase().includes(filterTerm.toLowerCase())),
      filterTerm: filterTerm
    }
  })

  const dispatch = useDispatch()

  const handleDelete = (id) => {
    dispatch(deleteCar(id))
  }

  function getHighlightedText(text, highlight) {
    // Split on highlight term and include term into parts, ignore case
    const parts = text.split(new RegExp(`(${highlight})`, 'gi'));
    return (

      <span>{
        parts.map((part, i) =>
          <span key={i} style={part.toLowerCase() === highlight.toLowerCase() ? {fontWeight: 'bold'} : {}}>
            {part}
          </span>)
      }</span>
    )
  }

  const renderedCars = cars.map((car) => {
    let carName = getHighlightedText(car.name, filterTerm)
    return (
      <div key={car.id}>
        Brand: {carName} - Price: {car.price}
        <button
          onClick={() => handleDelete(car.id)}
        >
          Delete
        </button>
      </div>
    )
  })

  return (
    <div>
      {renderedCars}
    </div>
  )
}

export default ShowCars
