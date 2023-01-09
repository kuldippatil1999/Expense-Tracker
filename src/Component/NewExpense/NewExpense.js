import React from 'react'
import "../NewExpense/NewExpense.css";
import ExpenseForm from './ExpenseForm'
function NewExpense(props) {

   const saveExpenseData=(enterExpenseData)=>{
       const expenseData={
        ...enterExpenseData,
        id:Math.random().toString()
       }
       props.onAddExpense(expenseData);
            // console.log(expenseData);
            // console.log(enterExpenseData);
   }
  return (
    <div className='new-expense'>
        
       <ExpenseForm onSaveExpenseData={saveExpenseData}/>
        
    </div>
  )
}

export default NewExpense