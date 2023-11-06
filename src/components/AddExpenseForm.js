import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import { v4 as uuidv4 } from "uuid";

const buttonImgs = [
  {
    title: "$20.png",
    amount: 20,
    index: 0
  },
  {
    title: "$10.jpeg",
    amount: 10,
    index: 1
  },
  {
    title: "$5.jpeg",
    amount: 5,
    index: 2
  },
  {
    title: "$1.jpeg",
    amount: 1,
    index: 3
  },
  {
    title: "quarter.jpeg",
    amount: 0.25,
    index: 4
  },
  {
    title: "dime.jpeg",
    amount: 0.10,
    index: 5
  },
  {
    title: "nickel.jpeg",
    amount: 0.05,
    index: 6
  },
  {
    title: "penny.jpeg",
    amount: 0.01,
    index: 7
  }
];
// Calculate the midpoint of the array
const midpoint = Math.ceil(buttonImgs.length / 2);

// Split the array into two separate arrays
const firstHalf = buttonImgs.slice(0, midpoint);
// const secondHalf = buttonImgs.slice(midpoint);

const AddExpenseForm = () => {
  const { dispatch } = useContext(AppContext);

  const [amounts, setAmounts] = useState(new Array(8).fill(0));

  const handleIncrement = (index) => {
    const newAmounts = [...amounts];
    newAmounts[index] += 1;
    setAmounts(newAmounts);
  };

  const handleDecrement = (index) => {
    const newAmounts = [...amounts];
    if (newAmounts[index] > 0) {
      newAmounts[index] -= 1;
      setAmounts(newAmounts);
    }
  };

  const onSubmit = (event) => {
    event.preventDefault();

    const total = amounts.reduce((acc, amount, index) => {
      const buttonImg = buttonImgs[index];
      return acc + amount * buttonImg.amount;
    }, 0);

    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString('en-US', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    });

    const expense = {
      id: uuidv4(),
      name: formattedDate,
      cost: total,
    };

    dispatch({
      type: "ADD_EXPENSE",
      payload: expense,
    });

    setAmounts(new Array(8).fill(0));
  };

  return (
    <form onSubmit={onSubmit}>
      <div>
        <div className="row">
          {firstHalf.map((buttonImg, index) => (
            <div className="col-md-3">
              <img
              src={require(`./money_icons/${buttonImg.title}`)}
              alt={`Icon ${index + 1}`}
              width={300}
              className="icon-image"
            />
            <button type="button" onClick={() => handleDecrement(buttonImg.index)}>-</button>
            <span>{amounts[index]}</span>
            <button type="button" onClick={() => handleIncrement(buttonImg.index)}>+</button>
            </div>
          ))}
        </div>
        
        <br></br>
      </div>
      <div className="submit-button">
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </div>
      <br></br>
    </form>
  );
  
};

export default AddExpenseForm;
