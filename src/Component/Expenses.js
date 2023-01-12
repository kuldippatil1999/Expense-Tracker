import React from "react";
import "../Style/Expenses.css";
import ExpenseItem from "./ExpenseItem";

function Expenses(props) {
  return (
    <div className="expense">
      {props.item.map((expense) => (
        <ExpenseItem
        key={expense._id}
          id={expense._id}
          date={expense.date}
          title={expense.title}
          amount={expense.amount}
          data={expense.data}
        />
      ))}
    </div>
  );
}

export default Expenses;
