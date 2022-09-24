import React, { useMemo, useState } from 'react'

const UseMemo = () => {
    // exmaple for useMemo
    const [number, setNumber] = useState(0)
    const [counter, setCounter] = useState(0);


    const squareNum = (num) => {
        console.log("Squaring will be done!");
        return Math.pow(number, 2);
    }
        // Using useMemo
    const squaredNum = useMemo(() => {
        return squareNum(number);
    }, [number])

    // Change the state to the input
    const onChangeHandler = (e) => {
        setNumber(e.target.value);
    }

    // Increases the counter by 1
    const counterHander = () => {
        setCounter(counter + 1);
    }

    return (
        <div>
            <input type="number" placeholder="Enter a number"
                value={number} onChange={onChangeHandler}>
            </input>
            <div>Number: {number}</div>
            <div>Squared Number: {squaredNum}</div>
            <button onClick={counterHander}>Increase Counter</button>
            <div>Counter: {counter}</div>
            
        </div>

    )
}

export default UseMemo