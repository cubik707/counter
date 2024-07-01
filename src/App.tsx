import React, {useState} from 'react';
import './App.css';
import {Counter} from "./components/Counter";
import {Settings} from "./components/Settings";

function App() {

    const maxFromLocalStorage = localStorage.getItem("max value");
    const startFromLocalStorage = localStorage.getItem("start value");

    const maxValue = maxFromLocalStorage ? JSON.parse(maxFromLocalStorage) : 5
    const startValue = startFromLocalStorage ? JSON.parse(startFromLocalStorage) : 0

    const [max, setMax] = useState(maxValue)
    const [min, setMin] = useState(startValue)
    const [count, setCount] = useState(min);
    const step = 1;

    const [error, setError] = useState(false);
    const [areSettingSet, setAreSettingSet] = useState(true)


    return (
        <div className="App">
            <Settings min={min}
                      changeMin={setMin}
                      max={max}
                      changeMax={setMax}
                      setCount={setCount}

                      setErrorHandler={setError}
                      setAreSettingSet={setAreSettingSet}
            />
            <Counter count={count}
                     min={min}
                     max={max}
                     step={step}
                     changeCount={setCount}

                     error={error}
                     areSettingSet={areSettingSet}
            />
        </div>
    );
}

export default App;
