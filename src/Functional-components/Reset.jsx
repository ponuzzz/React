import React, { useState } from 'react';

const Decrement = () => {
    const [time, setTime] = useState(0);

    const handleDecrement = () => {
        setTime(time);
    };

    return (
        <div>
            <h2>Time: {time} seconds</h2>
            <button onClick={handleDecrement}>Decrement</button>
        </div>
    );
};

export default Decrement;
