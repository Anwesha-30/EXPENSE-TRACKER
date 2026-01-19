import { useState } from "react";

const AddTransaction = ({ addTransaction }) => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    addTransaction({
      id: Date.now(),
      text,
      amount: +amount
    });

    setText("");
    setAmount("");
  };

  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Enter description"
          value={text}
          onChange={e => setText(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Enter amount (+income, -expense)"
          value={amount}
          onChange={e => setAmount(e.target.value)}
          required
        />
        <button>Add Transaction</button>
      </form>
    </>
  );
};

export default AddTransaction;
