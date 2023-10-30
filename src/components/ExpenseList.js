import React from "react";
import ExpenseItem from "./ExpenseItem";

const ExpenseList = () => {
  const expenses = [
    { id: 12, name: "Alex: Mowed Lawn", cost: 40 },
    { id: 13, name: "Andrew: Painted Fence", cost: 400 },
    { id: 14, name: "Brooke: Pulled Weeds", cost: 50 },
    { id: 15, name: "Cameron: Washed Dishes", cost: 20 },
  ];

  return (
    <ul className="list-group">
      {expenses.map((expense) => (
        <ExpenseItem id={expense.id} name={expense.name} cost={expense.cost} />
      ))}
    </ul>
  );
};

export default ExpenseList;
