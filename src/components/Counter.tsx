import {useState} from "react";
import {Button} from "./Button";
import c from "./Counter.module.css"

type CounterType = {
    count: number
    max: number
    min: number
    step: number
    changeCount: (count: number) => void
};
export const Counter = ({count, max, min, step, changeCount}: CounterType) => {


    const isCountMax = count === max;
    const isCountMin = count === min;
    const countIncHandler = () => {
        if (count < max){
            changeCount(count + step);
        }

    }
    const countResetHandler = () => {
        changeCount(min);
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