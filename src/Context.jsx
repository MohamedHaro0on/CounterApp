import React, { createContext, useState } from 'react'

const CounterContext = createContext([]);

const CounterProvider = (props) => {
    const [counter, setCounter] = useState(0);
    const handleCounterIncreament = () => {
        setCounter(prevState => prevState + 1);
    }
    const handleCounterDecreament = () => {
        setCounter(prevState => prevState - 1);
    }
    const setCounterToZero = () => {
        setCounter(0);
    }
    return (
        <CounterContext.Provider value={{ counter, handleCounterIncreament, handleCounterDecreament, setCounterToZero }} {...props}>
            {props.children}
        </CounterContext.Provider>
    )
}
export { CounterContext, CounterProvider };