import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {Counter} from "./components/Counter";
import {Settings} from "./components/Settings";

function App() {
    const [count, setCount] = useState(0);
    const [max, setMax] = useState(5)
    const [min, setMin] = useState(0)
    const step = 1;

    const [error, setError] = useState(false)


    return (
        <div className="App">
            <Settings min={min}
                      changeMin={setMin}
                      max={max}
                      changeMax={setMax}

                      error={error}
                      setErrorHandler={setError}
            />
            <Counter count={count}
                     min={min}
                     max={max}
                     step={step}
                     changeCount={setCount}
            />
        </div>
    );
}

export default App;
