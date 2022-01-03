import React, {useState} from 'react';

import ExpenseForm from './ExpenseForm';

import './NewExpense.css';

const NewExpense = (props) => {
    const [showAddNewExpense, setShowAddNewExpense] = useState(false);

    const toggleAddNewExpense = () => {
        setShowAddNewExpense( (prevState) => !prevState);
    }

 
    const newExpenseHandler = (expenseData) => {
        const newExpense = {...expenseData, id: Math.random()};
        props.onAddNewExpense(newExpense);
        setShowAddNewExpense(false);
    }
    
    if(showAddNewExpense){
        return (
            <div className="new-expense">
                <ExpenseForm onSubmitNewExpense={newExpenseHandler} toggleAddNewExpense={toggleAddNewExpense}/>
            </div>
        )
    }
    return (
        <div className="new-expense">
            <button onClick={toggleAddNewExpense}> Add Expense </button>
        </div>
    )
    
}

export default NewExpense;