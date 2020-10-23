import React, { useState  , useContext} from 'react'
import ClassNames from "./Items.module.scss";
import {CounterContext} from "../../Context";
function Items() {
    const [items, setItems] = useState([
        {id : 1 , value : 0 },
        {id : 2 , value : 0 },
        {id : 3 , value : 0 },
        {id : 4 , value : 0 },
    ]);
    const {handleCounterIncreament , handleCounterDecreament , setCounterToZero} = useContext(CounterContext);
    function handleItemIncreament(index) {
        const temp = [...items];
        temp[index].value++;
        if (temp[index].value  === 1 ){
            handleCounterIncreament();
        }
        setItems(temp);
    }
    function handleItemDecreament(index) {
        if(items[index].value > 0 ){
            const temp = [...items];
            temp[index].value--;
            setItems(temp);
            if(temp[index].value < 1 && temp[index].value > -1){
                handleCounterDecreament();
            }
        }
    }
    function handleItemDelete(index) {
        let temp = [...items] ;
        if (temp[index].value > 1 ){
            handleCounterDecreament();
        }
        temp.splice(index , 1) ;
        console.log("the temp : " , temp , index ) ;
        setItems(temp);
    }
    function handleReset() {
        for (let i = 0 ; i < items.length ; i ++){
                items[i] = 0 ;
        }
        setCounterToZero();
    }
    function handleRestart (){
        window.location.reload();
    }

    return (
        <div className = {ClassNames.Items}>
            <button onClick={handleReset} className = {ClassNames.Reset}> reset </button>
            <button onClick = {handleRestart} className = {ClassNames.Restart}> restart</button>
            <ul>
                {items.map((element, index) => {
                    return (
                        <li key = {element.id}>
                            <span>{element.value}</span>
                            <button onClick={handleItemIncreament.bind(this, index)} className = {ClassNames.Increament}> +++ </button>
                            <button onClick={handleItemDecreament.bind(this, index)} className = {ClassNames.Decreament}> --- </button>
                            <button onClick = {handleItemDelete.bind(this , index)}  className = {ClassNames.Delete}>del</button>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Items