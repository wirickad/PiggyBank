import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const RemainingMessage = () => {
  const { expenses, budget } = useContext(AppContext);

  const totalExpenses = expenses.reduce((total, item) => {
    return (total = total + item.cost);
  }, 0);

  const alertType = totalExpenses > budget ? "alert-danger" : "alert-success";
  const remainingMessage =
    totalExpenses > budget ? "You did it!" : "Almost there!";
  return (
    <div>
      <span>{remainingMessage}</span>
    </div>
  );
};

export default RemainingMessage;
