import { useState } from "react";
import ExpenseCard from "./Components/ExpenseCard";
import ExpenseItem from "./Data/ExpenseItem";
import ExpenseForm from "./Components/ExpenseForm";
import FilterDiv from "./Components/FilterDiv";
import Chart from './Components/Chart';

import "./Components/css/style.css";
function App() {
  let [filterOption, setFilterOption] = useState("2022");
  const [ExpenseItemValue, setExpenseItemValue] = useState(ExpenseItem);
  const onSaveExpensedateHandler = (enteredValue) => {
    let totalExpense = {
      id: Math.random().toString(),
      ...enteredValue,
    };
    setExpenseItemValue([totalExpense, ...ExpenseItemValue]);
  };
  const onSelectFilterOptionHandler = (selectedOtion) => {
    setFilterOption(selectedOtion);
  };
  let filteredItem = ExpenseItemValue.filter((cur) => cur.expenseDate.getFullYear().toString() === filterOption);
  return (
    <>
      <div className="whole-wrapper">
        <ExpenseForm onSaveExpensedate={onSaveExpensedateHandler} />
        <FilterDiv onSelectFilterOption={onSelectFilterOptionHandler} />
        <div className="chart-wrapper">
          <Chart items={filteredItem} />
        </div>
        <div className="expense-item-wrapper">
          {filteredItem.length <= 0 && <h1 className="no-result-found-text">No result found</h1>}
          {filteredItem.map((item) => (
            <ExpenseCard
              key={item.id}
              title={item.expenseName}
              amount={item.expenseAmount}
              date={item.expenseDate}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
