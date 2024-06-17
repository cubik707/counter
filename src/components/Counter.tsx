import {useState} from "react";
import {Button} from "./Button";
import c from "./Counter.module.css"

type CounterType = {

};
export const Counter = (props: CounterType) => {
    const [count, setCount] = useState(0);
    const max = 5;
    const min = 0;
    const step = 1;

    const isCountMax = count === max;
    const isCountMin = count === min;
    const countIncHandler = () => {
        if (count < max){
            setCount(count + step);
        }

    }
    const countResetHandler = () => {
        setCount(min);
    }
    console.log(count)
    return (
        <div className={c.box}>
            <div className={`${c.counter} ${isCountMax ? c.error : ''}`}>{count}</div>

            <div className={c.btnWrapper}>
                <Button className={`${c.button} ${isCountMax ? c.disable : ''}`} title={'inc'} onClick={countIncHandler} disable={isCountMax}/>
                <Button className={`${c.button} ${isCountMin ? c.disable : ''}`} title={'reset'} onClick={countResetHandler} disable={isCountMin}/>
            </div>

        </div>
    );
};