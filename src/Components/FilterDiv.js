import "./css/FilterDiv.css";
function FilterDiv(props) {
  const onChangeHandler = (e) => {
    props.onSelectFilterOption(e.target.value);
  };
  return (
    <>
      <div className="filter-div-wrapper">
        <div className="filter-heading">
          <h1>Filter By Year</h1>
        </div>
        <div className="filter-dropdown">
          <select name="year" onChange={onChangeHandler}>
            <option value="2022">2022</option>
            <option value="2023">2023</option>
            <option value="2024">2024</option>
            <option value="2025">2025</option>
            <option value="2026">2026</option>
          </select>
        </div>
      </div>
    </>
  );
}
export default FilterDiv;
