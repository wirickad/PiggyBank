import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Budget = () => {
  const { budget } = useContext(AppContext);

  return (
    <div className="alert alert-secondary">
      <span>Goal: ${budget}</span>
    </div>
  );
};

export default Budget;
