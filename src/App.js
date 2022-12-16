//import ExpenseItem from "./components/ExpenseItem";
import React from "react";
import NewExpense from "./components/NewExpense/NewExpense";
import DisplayExpenses from "./components/Expenses/DisplayExpenses";

const App = () => {
  const expenses = [
    {
      id: "e1",
      title: "Sheet Trim",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    {
      id: "e2",
      title: "Angle L2x2",
      amount: 799.49,
      date: new Date(2021, 2, 12),
    },
    {
      id: "e3",
      title: "Plate 3/16",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "Purlin 24C1246",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  return (
      <div>
        <NewExpense />
          <DisplayExpenses items={expenses} />
      </div>
  );

  // return React.createElement(
  //     'div', {},
  //       React.createElement('h2', {}, "Let's get started!"),
  //       React.createElement(DisplayExpenses, {items: expenses})
  // );

}

export default App;
