import s from "./Settings.module.css"
import {Button} from "./Button";
import {ChangeEvent, useState} from "react";

type SettingsPropsType = {
    max: number
    changeMax: (max: number) => void
    min: number
    changeMin: (min: number) => void
    setCount: (count: number) => void

    setErrorHandler: (error: boolean) => void
    setAreSettingSet: (areSettingSet: boolean) => void
};
export const Settings = (props : SettingsPropsType) => {
    const [newMin, setNewMin] = useState(props.min);
    const [newMax, setNewMax] = useState(props.max);

    const [isDisable, setIsDisable] = useState(true)

    const [inputErrors, setInputErrors] = useState({min: false, max: false});

    const onChangeHandlerMax = (event: ChangeEvent<HTMLInputElement>) =>{
        const value = Number(event.currentTarget.value);
        setNewMax(value);
        setIsDisable(false)
        props.setAreSettingSet(false)
        if (value < 0 || value <= newMin) {
            props.setErrorHandler(true);
            setInputErrors((prev) => ({...prev, max: true}))
            setIsDisable(true)
        } else {
            props.setErrorHandler(false);
            setInputErrors((prev) => ({...prev, max: false}))
        }

    }

    const onChangeHandlerMin = (event: ChangeEvent<HTMLInputElement>) =>{
        const value = Number(event.currentTarget.value);
        setNewMin(value);
        setIsDisable(false)
        props.setAreSettingSet(false)
        if (value < 0 || value >= newMax) {
            props.setErrorHandler(true);
            setInputErrors((prev) => ({...prev, min: true}))
            setIsDisable(true)
        } else {
            props.setErrorHandler(false);
            setInputErrors((prev) => ({...prev, min: false}))
        }
    }



    const handleSetButtonClick = () => {
        props.changeMin(newMin);
        props.changeMax(newMax);
        props.setCount(newMin)
        setIsDisable(true)
        props.setAreSettingSet(true)

        localStorage.setItem("max value", JSON.stringify(newMax))
        localStorage.setItem("start value", JSON.stringify(newMin))
    };


    return (
        <div className={s.box}>
            <div className={s.inputBox}>
                <div className={s.lableInputBox}>
                    <label htmlFor={'maxValue'}>
                        max value:
                    </label>
                    <input id={'maxValue'}
                           type={'number'}
                           className={`${s.input}  ${inputErrors.max ? s.errorInput : ''}`}
                           defaultValue={props.max}
                           onChange={onChangeHandlerMax}
                    />
                </div>

                <div className={s.lableInputBox}>
                    <label htmlFor={'startValue'}>
                        start value:
                    </label>
                    <input id={'startValue'}
                           type={'number'}
                           className={`${s.input}  ${inputErrors.min ? s.errorInput : ''}`}
                           defaultValue={props.min}
                           onChange={onChangeHandlerMin}
                    />
                </div>
            </div>
            <div className={s.buttonBox}>
                <Button title={'set'} onClick={handleSetButtonClick} disable={isDisable}/>
            </div>
        </div>
    );
};