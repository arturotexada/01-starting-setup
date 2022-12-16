import React, { useState} from 'react';
import './ExpenseForm.css';
import ExpenseDate from './../Expenses/ExpenseDate';

const ExpenseForm = () => {
// States separated
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    const [enteredTitle, setEnteredTitle] = useState('');
    // States gathered
    // const [userInput, setUserInput] =useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: ''
    // });
//////
// States separated    
    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    };
//////


// States gathered
    // const titleChangeHandler = (event) => {
    //     setUserInput({
    //     ...userInput, 
    //     enteredTitle: event.target.value,
    //     })
    // };
// States gathered - alternative
    // const titleChangeHandler = (event) => {
    //     setUserInput((prevState) => {
    //         return {...prevState, enteredTitle: event.target.value };
    //     });
    // };
//////
// States separated    
    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    };
// States gathered 
    // const amountChangeHandler = (event) => {
    //     setUserInput({
    //     ...userInput, 
    //     enteredAmount: event.target.value,
    //     })
    // };
// States gathered - alternative
    // const amountChangeHandler = (event) => {
    //     setUserInput((prevState) => {
    //         return {...prevState, enteredAmount: event.target.value };
    //     });
    // };
//////
// States separated
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    };
// States gathered
    // const dateChangeHandler = (event) => {
    //     setUserInput({
    //     ...userInput, 
    //     enteredDate: event.target.value,
    //     })
    // };
// States gathered - alternative
    // const dateChangeHandler = (event) => {
    //     setUserInput((prevState) => {
    //         return {...prevState, enteredDate: event.target.value };
    //     });
    // };

    const submitHandler = (event) => {
        event.preventDefault();

        const ExpenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)  
        };

        console.log(ExpenseData);
    };

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type='text' onChange={titleChangeHandler} />
                </div>

                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type='number' onChange={amountChangeHandler} min="0.01" step="0.01" />
                </div>

                <div className="new-expense__control">
                    <label>Date</label>
                    <input type='date' onChange={dateChangeHandler} min="2019-01-01" step="2023-12-31" />
                </div>

                <div className="new-expense__actions">
                    <button type="submit">Add Expense</button>
                </div>

            </div>
        </form>
    );
};

export default ExpenseForm;