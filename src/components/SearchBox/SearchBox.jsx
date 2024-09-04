import css from "./SearchBox.module.css";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter, selectFilterValue } from "../../redux/filtersSlice";

function SearchBox() {
  const dispatch = useDispatch();
  const value = useSelector(selectFilterValue);

  const handleFilter = (event) => {
    const inputValue = event.target.value;
    dispatch(changeFilter(inputValue));
  };

  return (
    <div className={css.inputFindForm}>
      <p className={css.inputTitle}>Find contacts by name</p>
      <input
        className={css.input}
        type="text"
        placeholder=""
        value={value}
        onChange={handleFilter}
      />
    </div>
  );
}

export default SearchBox;
