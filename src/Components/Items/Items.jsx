import React, { useState, useContext } from 'react'
import ClassNames from "./Items.module.scss";
import { CounterContext } from "../../Context";



const Items = () => {

    const { handleCounterIncreament, handleCounterDecreament, setCounterToZero } = useContext(CounterContext);

    const [items, setItems] = useState([
        { id: 1, value: 0 },
        { id: 2, value: 0 },
        { id: 3, value: 0 },
        { id: 4, value: 0 },
    ]);

    const handleItemIncreament = (index) => {
        const temp = [...items];
        temp[index].value++;
        if (temp[index].value === 1) {
            handleCounterIncreament();
        }
        setItems(temp);
    }
    const handleItemDecreament = (index) => {
        if (items[index].value > 0) {
            const temp = [...items];
            temp[index].value--;
            setItems(temp);
            if (temp[index].value < 1 && temp[index].value > -1) {
                handleCounterDecreament();
            }
        }
    }
    const handleItemDelete = (index) => {
        let temp = [...items];
        if (temp[index].value >= 1) {
            handleCounterDecreament();
        }
        temp.splice(index, 1);
        setItems(temp);
    }

    const handleReset = () => {
        for (let i = 0; i < items.length; i++) {
            items[i] = 0;
        }
        setCounterToZero();
    }

    const handleRestart = () => {
        window.location.reload();
    }

    return (
        <div className={ClassNames.Items}>
            <button onClick={handleReset} className={ClassNames.ResetBtn} aria-label="Reset"> reset </button>
            <button onClick={handleRestart} className={ClassNames.RestartBtn} aria-label="Restart"> restart</button>
            <ul>
                {items.map(({id , value}, index) => {
                    return (
                        <li key={id}>
                            <span>{value}</span>
                            <button onClick={handleItemIncreament.bind(this, index)} className={ClassNames.IncreamentBtn} aria-label = "increment by one"> +++ </button>
                            <button onClick={handleItemDecreament.bind(this, index)} className={ClassNames.DecreamentBtn} aria-label = "decrement by one"> --- </button>
                            <button onClick={handleItemDelete.bind(this, index)} className={ClassNames.DeleteBtn} aria-label = "Delete The Item">del</button>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Items