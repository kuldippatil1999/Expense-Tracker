import React from "react";
import "../Style/Expenses.css";
import ExpenseItem from "./ExpenseItem";

function Expenses(props) {
  return (
    <div className="expense">
      {props.item.map((expense) => (
        <ExpenseItem
          key={expense._id}
          date={expense.date}
          title={expense.title}
          amount={expense.amount}
        />
      ))}
    </div>
  );
}

export default Expenses;
