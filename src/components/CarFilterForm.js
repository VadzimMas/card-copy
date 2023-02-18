import {useDispatch, useSelector} from "react-redux";
import {changeFilterTerm, clearFilterTerm} from "../store";

function CarFilterForm() {

  const filterTerm = useSelector(state => state.form.filterTerm)
  const dispatch = useDispatch()

  const handleFilterChange = (e) => {
    dispatch(changeFilterTerm(e.target.value))
  }

  const handleClear = (e) => {
    e.preventDefault()
    dispatch(clearFilterTerm())
  }

  return (
    <form>
      <fieldset>
        <label>Filter: </label>
        <input
          value={filterTerm}
          onChange={handleFilterChange}
        />
        <button
          onClick={handleClear}
        >
          Clear
        </button>
      </fieldset>
    </form>
  )
}

export default CarFilterForm