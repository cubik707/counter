import s from "./Settings.module.css"
import {Button} from "./Button";
import {ChangeEvent, useState} from "react";

type SettingsPropsType = {
    max: number
    changeMax: (max: number) => void
    min: number
    changeMin: (min: number) => void
    setCount: (count: number) => void

    setErrorHandler: (error: string) => void
};
export const Settings = (props : SettingsPropsType) => {
    //Стейт для дисейбла кнопки сета
    const [isDisable, setIsDisable] = useState(true)
    //Стейт для установки ошибки на конкретном инпуте
    const [inputErrors, setInputErrors] = useState({min: false, max: false});

    // Function to set the message to 'enter values and press "set"' if needed
    const setDefaultMessage = () => {
        if (!inputErrors.min && !inputErrors.max) {
            props.setErrorHandler('enter values and press "set"');
        }
    };

    //Обработка события ввода максимального значения на инпуте
    const onChangeHandlerMax = (event: ChangeEvent<HTMLInputElement>) =>{
        const value = Number(event.currentTarget.value);
        props.changeMax(value);

        setIsDisable(false) //Теперь можно засетать
        setDefaultMessage(); //Значения не засетаны

        if (value < 0 || value <= props.min) {
            //Обработка ошибок
            props.setErrorHandler('Incorrect value!');
            setInputErrors((prev) => ({...prev, max: true}))
            setIsDisable(true) //При ошибке нелья засетать
        } else {
            //Если нет ошибок
            setDefaultMessage();
            setInputErrors((prev) => ({...prev, max: false}))
        }

    }

    //Обработка события ввода стартового значения на инпуте
    const onChangeHandlerMin = (event: ChangeEvent<HTMLInputElement>) =>{
        const value = Number(event.currentTarget.value);
        props.changeMin(value);

        setIsDisable(false)
        setDefaultMessage(); //Значения не засетаны

        if (value < 0 || value >= props.max) {
            //Обработка ошибок
            props.setErrorHandler('Incorrect value!');
            setInputErrors((prev) => ({...prev, min: true}))
            setIsDisable(true) //При ошибке нелья засетать
        } else {
            //Если нет ошибок
            setDefaultMessage();
            setInputErrors((prev) => ({...prev, min: false}))
        }
    }

    //Обработка клика по кнопке set
    const handleSetButtonClick = () => {
        props.setCount(props.min) //Устанавливаем положения счетчика на минимальное значение
        setIsDisable(true) //После сета значений сетать нечего
        props.setErrorHandler('');

        //Сохранение засетанных значений в local storage
        localStorage.setItem("max value", JSON.stringify(props.max))
        localStorage.setItem("start value", JSON.stringify(props.min))
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