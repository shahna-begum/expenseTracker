import { useState } from "react";
import "./css/ExpenseForm.css";
import { BiDollar } from "react-icons/bi";
import { BsCalendarDate } from "react-icons/bs";
import { MdOutlineTextFields } from "react-icons/md";
import "./css/style.css";

function ExpenseForm(props) {
  let formValues, inputData;
  let [inputValue, setChangeValue] = useState();
  let [inputAmountValue, setInputAmountValue] = useState();
  let [inputDateValue, setInputDateValue] = useState();
  const onTitleChangeHandler = (e) => {
    setChangeValue(e.target.value);
  };
  const onAmountChangeHandler = (e) => {
    setInputAmountValue(e.target.value);
  };
  const onDateChangeHandler = (e) => {
    setInputDateValue(e.target.value);
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();

    if (
      inputValue === undefined ||
      inputAmountValue === undefined ||
      inputDateValue === undefined
    ) {
      alert("Please fill the fields");
    } else {
      inputData = {
        expenseName: inputValue,
        expenseAmount: inputAmountValue,
        expenseDate: new Date(inputDateValue),
      };
      formValues = { ...inputData };
      setChangeValue("");
      setInputAmountValue("");
      setInputDateValue("");
      props.onSaveExpensedate(formValues);
    }
  };

  return (
    <>
      <div className="expense-form-wrapper">
        <form onSubmit={onSubmitHandler}>
          <div className="form-group">
            <label htmlFor="title-input">Title</label>
            <div className="input-icon-wrapper">
              <div className="">
                <MdOutlineTextFields />
              </div>
              <input
                type="text"
                id="title-input"
                className="form-control"
                placeholder="Enter your expense name..."
                value={inputValue}
                onChange={onTitleChangeHandler}
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="date-input">Date</label>
            <div className="input-icon-wrapper">
              <div className="">
                <BsCalendarDate />
              </div>
              <input
                type="date"
                className="form-control"
                id="date-input"
                min="2022"
                max="2026"
                placeholder="Enter your expnese date..."
                onChange={onDateChangeHandler}
                value={inputDateValue}
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="amount-input">Amount</label>
            <div className="input-icon-wrapper">
              <div className="">
                <BiDollar />
              </div>
              <input
                type="number"
                className="form-control"
                id="amount-input"
                step="0.5"
                placeholder="Enter your expense amount..."
                min="0"
                onChange={onAmountChangeHandler}
                value={inputAmountValue}
              />
            </div>
          </div>
          <div className="add-expense-btn-div">
            <button type="submit" className="add-expense-btn">
              Add Expense
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
export default ExpenseForm;
