import React, { useEffect, useState } from 'react'


const Count = () => {
    const [count, setCount] = useState(0);

    const increment = (() => {
        setCount(count + 1);
    })

    const decrement = (() => {
        setCount(count - 1);
    })

    useEffect(() => {
        console.log("effect");
    }, [count]);

    return (
        <div>
            <h1>Counter</h1>
            <button onClick={increment}>increment</button>
            <button onClick={decrement}>decrement</button>
    
        </div>
    )

    }

export default Count