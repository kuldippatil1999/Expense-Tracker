import React from "react";
import "../Style/ExpenseItem.css";
import ExpensDate from "./ExpensDate";
function ExpenseItem(props) {
 
  function deleteExp(id,data){
    // alert(id)
        fetch(`/api/v1/product/${id}`, {
      method: "DELETE",
     
    }).then((response) => {
      response.json().then((res)=>{console.log(res);})
    });
    data()
  }
  return (
    <div className="Expens-item">
            <ExpensDate date={new Date(props.date)} />
      <div className="Expens-item__description">
        <h2>{props.title}</h2>
        <div className="Expens-item__price">${props.amount}</div>
        <button onClick={()=>deleteExp(props.id,props.data)}>Delete</button>
      </div>
    </div>
  );
}

export default ExpenseItem;
