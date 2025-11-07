import React, { useState } from 'react';

const Decrement = () => {
  const [time, setTime] = useState(0);

  const handleIncrement = () => {
    setTime(time + 1);
  };
  const handleDecrement = () => {
    setTime(time - 1);
  };
  const handleReset = () => {
    setTime(0);
  };

  return (
    <div>
      <h2>Time: {time} seconds</h2>
      <button onClick={handleIncrement}> Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default Decrement;
