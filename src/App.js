import React, { useState, useEffect } from "react";
import "./App.css";
import Expenses from "./Component/Expenses";
import NewExpense from "./Component/NewExpense/NewExpense";

let DUMMY_EXPENSE = [];
function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSE);

  function fetchData() {
    fetch("/api/v1/products")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setExpenses(data);
      });
  }

  useEffect(() => {
    fetchData();
  }, []);

  const addExpenseHandler = (expense) => {
    fetch("/api/v1/product/new", {
      method: "POST",
      body: JSON.stringify(expense),
      headers: {
        "content-Type": "application/json",
      },
    }).then((response) => {
      fetchData();
    });
    // const updatedExpense=[expense,...expenses]
    // setExpenses(updatedExpense);
  };
  return (
    <div className="App">
      <h3><span className="name">Expense Tracker</span></h3>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses item={expenses} data={fetchData()}/>
    </div>
  );
}

export default App;
