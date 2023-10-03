import "../Components/css/ExpenseCardCss.css";
import "../Components/css/style.css";
function ExpenseCard(props) {
  let month = props.date.toLocaleString("en-US", { month: "long" });
  let day = props.date.toLocaleString("en-US", { day: "2-digit" });
  let year = props.date.getFullYear();
  return (
    <>
      <div className="card">
        <div>
          <div>
            <div>
              <h3>{year}</h3>
              <h4>
                <small>{month}</small>
              </h4>
              <h1>{day}</h1>
            </div>
          </div>
          <div>
            <h1 className="expense-name">{props.title}</h1>
          </div>
          <div className="text-end">
            <button type="button" className="expense-btn">
              ${props.amount}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default ExpenseCard;
