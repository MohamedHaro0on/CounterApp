import React  , {createContext, useState} from 'react'

const CounterContext = createContext ([]) ;

function CounterProvider (props){
    const [counter , setCounter ] = useState(0) ;
    function handleCounterIncreament (){
        setCounter( prevState => prevState + 1 );
    } 
    function handleCounterDecreament(){
        setCounter(prevState => prevState -1 ) ;
    }
    function setCounterToZero (){
        setCounter(0) ;
    }
    return (
        <CounterContext.Provider value = {{counter , handleCounterIncreament , handleCounterDecreament , setCounterToZero}}>
            {props.children}
        </CounterContext.Provider>
    )
}
export {CounterContext , CounterProvider} ;