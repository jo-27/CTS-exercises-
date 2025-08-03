import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [amount, setAmount] = useState('');
  const [currency, setCurrency] = useState('');
  const handleIncrement = () => {
    setCount(count + 1);
    sayHello();
  };

  const sayHello = () => {
    alert('Hello! Member1');
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  const sayWelcome = (msg) => {
    alert(msg);
  };

  const handleClick = () => {
    alert("I was clicked");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const conversionRate = 80; 
    const result = amount * conversionRate;
    alert(`Converting to ${currency} Amount is ${result}`);
  };

  return (
    <div style={{ padding: "30px" }}>
      <h2>{count}</h2>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={() => sayWelcome("welcome")}>Say welcome</button>
      <button onClick={handleClick}>Click on me</button>
      <h1 style={{ color: 'green' }}>Currency Convertor!!!</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Amount:</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <br />
        <div>
          <label>Currency:</label>
          <textarea
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
          ></textarea>
        </div>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
