import React from "react";
import "../Style/ExpenseItem.css";
import ExpensDate from "./ExpensDate";
function ExpenseItem(props) {
  return (
    <div className="Expens-item">
            <ExpensDate date={new Date(props.date)} />
      <div className="Expens-item__description">
        <h2>{props.title}</h2>
        <div className="Expens-item__price">${props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
