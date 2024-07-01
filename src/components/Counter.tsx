import {Button} from "./Button";
import c from "./Counter.module.css"
import {Simulate} from "react-dom/test-utils";

type CounterType = {
    count: number
    max: number
    min: number
    step: number
    changeCount: (count: number) => void

    error: boolean
    areSettingSet: boolean
};
export const Counter = (props: CounterType) => {
    const isCountMax = props.count === props.max;
    const isCountMin = props.count === props.min;
    const countIncHandler = () => {
        if (props.count < props.max) {
            props.changeCount(props.count + props.step);
        }

    }
    const countResetHandler = () => {
        props.changeCount(props.min);
    }


    const printValue = props.error
        ? 'Incorrect value!' : !props.areSettingSet
            ? 'enter values and press "set"' : `${props.count}`
    const counterValueClassName = `${c.counter} ${isCountMax || props.error ? c.error : ''}`
    return (
        <div className={c.box}>
            <div className={counterValueClassName}>{printValue}</div>

            <div className={c.btnWrapper}>
                <Button className={`${c.button} ${isCountMax ? c.disable : ''}`} title={'inc'} onClick={countIncHandler} disable={isCountMax || props.error || !props.areSettingSet}/>
                <Button className={`${c.button} ${isCountMin ? c.disable : ''}`} title={'reset'} onClick={countResetHandler} disable={isCountMin || props.error || !props.areSettingSet}/>
            </div>

        </div>
    );
};