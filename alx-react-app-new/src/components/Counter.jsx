<<<<<<< HEAD
import React, { useState } from 'react';

function Counter() {
    // Initialize the count state to 0
    const [count, setCount] = useState(0);

    return (
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <p style={{ fontSize: '20px' }}>Current Count: {count}</p>
            {/* Increment Button */}
            <button
                onClick={() => setCount(count + 1)}
                style={{ margin: '5px', padding: '10px 20px', fontSize: '16px' }}
            >
                Increment
            </button>
            {/* Decrement Button */}
            <button
                onClick={() => setCount(count - 1)}
                style={{ margin: '5px', padding: '10px 20px', fontSize: '16px' }}
            >
                Decrement
            </button>
            {/* Reset Button */}
            <button
                onClick={() => setCount(0)}
                style={{ margin: '5px', padding: '10px 20px', fontSize: '16px' }}
            >
                Reset
            </button>
        </div>
    );
}

export default Counter;
=======
import React, { useState } from 'react';

function Counter() {
    // Initialize the count state to 0
    const [count, setCount] = useState(0);

    return (
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <p style={{ fontSize: '20px' }}>Current Count: {count}</p>
            {/* Increment Button */}
            <button
                onClick={() => setCount(count + 1)}
                style={{ margin: '5px', padding: '10px 20px', fontSize: '16px' }}
            >
                Increment
            </button>
            {/* Decrement Button */}
            <button
                onClick={() => setCount(count - 1)}
                style={{ margin: '5px', padding: '10px 20px', fontSize: '16px' }}
            >
                Decrement
            </button>
            {/* Reset Button */}
            <button
                onClick={() => setCount(0)}
                style={{ margin: '5px', padding: '10px 20px', fontSize: '16px' }}
            >
                Reset
            </button>
        </div>
    );
}

export default Counter;
>>>>>>> bd83420 (Initial clean commit without env file)
