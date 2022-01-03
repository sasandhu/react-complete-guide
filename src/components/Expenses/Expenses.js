import React, {useState} from 'react';

import Card from '../UI/Card';
import ExpensesFilter from '../ExpensesFilter/ExpensesFilter'
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart'

import './Expenses.css';

const Expenses = (props) => {
    const [enteredYear, setEnteredYear] = useState('2021');

    const filterYearHandler = (filteredYear) => {
        setEnteredYear(filteredYear);
        console.log(enteredYear);
    }

    const filteredExpenses = props.expenses.filter(expense => expense.date.getFullYear().toString() === enteredYear);

    return(
        <div>
            <Card className="expenses">
                <ExpensesFilter selected={enteredYear} onFilterYear={filterYearHandler}/>
                <ExpensesChart expenses={filteredExpenses} />
                <ExpensesList expenses={filteredExpenses}/> 
            </Card>
        </div>
    );
}

export default Expenses;