import s from "./Settings.module.css"
import {Button} from "./Button";
import {ChangeEvent, useState} from "react";

type SettingsPropsType = {
    max: number
    changeMax: (max: number) => void
    min: number
    changeMin: (min: number) => void

    error: boolean
    setErrorHandler: (error: boolean) => void
};
export const Settings = ({  error,
                             setErrorHandler,
                             min,
                             changeMin,
                             max,
                             changeMax
                         }: SettingsPropsType) => {
    const [newMin, setNewMin] = useState(min);
    const [newMax, setNewMax] = useState(max);

    const onChangeHandlerMax = (event: ChangeEvent<HTMLInputElement>) =>{

        newMax < 0 || newMax < min
            ? setErrorHandler(true)
            : setNewMax(Number(event.currentTarget.value));

    }

    const onChangeHandlerMin = (event: ChangeEvent<HTMLInputElement>) =>{
        setNewMin(Number(event.currentTarget.value));
    }

    const handleSetButtonClick = () => {
        changeMin(newMin);
        changeMax(newMax);
    };

    const inputClass = error ? s.errorInput : s.input

    return (
        <div className={s.box}>
            <div className={s.inputBox}>
                <div className={s.lableInputBox}>
                    <label htmlFor={'maxValue'}>
                        max value:
                    </label>
                    <input id={'maxValue'}
                           type={'number'}
                           className={inputClass}
                           defaultValue={max}
                           onChange={onChangeHandlerMax}
                    />
                </div>

                <div className={s.lableInputBox}>
                    <label htmlFor={'startValue'}>
                        start value:
                    </label>
                    <input id={'startValue'}
                           type={'number'}
                           className={inputClass}
                           defaultValue={min}
                           onChange={onChangeHandlerMin}
                    />
                </div>
            </div>
            <div className={s.buttonBox}>
                <Button title={'set'} onClick={handleSetButtonClick} disable={false}/>
            </div>
        </div>
    );
};