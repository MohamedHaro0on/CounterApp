import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import {CounterProvider} from './Context';
import ClassNames from "./App.module.scss";
import Items from './Components/Items/Items';
function App() {
  return (
    <CounterProvider>
      <Navbar/>
      <div className = {ClassNames.Main}>
        <Items/>
      </div>
    </CounterProvider>
  );
}

export default App;
