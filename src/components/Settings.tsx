import s from "./Settings.module.css"
import {Button} from "./Button";
import {ChangeEvent, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../state/store";
import {SetErrorAC, SetMaxAC, SetMinAC} from "../state/settings-reducer";
import {ResetCountAC} from "../state/count-reducer";

type SettingsPropsType = {
};

export type SettingsType = {
    max: number,
    min: number,
    error: string
}
export const Settings = (props : SettingsPropsType) => {
    const settings = useSelector<AppRootStateType, SettingsType>(state => state.settings)
    const dispatch = useDispatch();

    //Стейт для дисейбла кнопки сета
    const [isDisable, setIsDisable] = useState(true)
    //Стейт для установки ошибки на конкретном инпуте
    const [inputErrors, setInputErrors] = useState({min: false, max: false});

    const setPressSetMessage = () => {
        if (!inputErrors.min && !inputErrors.max) {
            //------------ props.setErrorHandler('enter values and press "set"');
            dispatch(SetErrorAC('enter values and press "set"'))
        }
    };

    const setValueHandler = (type: 'min' | 'max', value: number) => {
        const setState = {
            min: SetMinAC,
            max: SetMaxAC
        }

        const errorConditions = {
            min: value < 0 || value >= settings.max,
            max: value < 0 || value <= settings.min,
        }
        dispatch(setState[type](value))

        setIsDisable(false) //Теперь можно засетать
        setPressSetMessage(); //Значения не засетаны

        if (errorConditions[type]) {
            //Обработка ошибок
            dispatch(SetErrorAC('Incorrect value!'))

            setInputErrors((prev) => ({...prev, [type]: true}))
            setIsDisable(true) //При ошибке нелья засетать
            return
        }
        //Если нет ошибок
        setPressSetMessage();
        setInputErrors((prev) => ({...prev, [type]: false}))
    }

    const onChangeHandlerMax = (event: ChangeEvent<HTMLInputElement>) =>{
        const value = Number(event.currentTarget.value);
        setValueHandler('max', value)
    }

    //Обработка события ввода стартового значения на инпуте
    const onChangeHandlerMin = (event: ChangeEvent<HTMLInputElement>) =>{
        const value = Number(event.currentTarget.value);
        setValueHandler('min', value)
    }

    //Обработка клика по кнопке set
    const handleSetButtonClick = () => {
        //Устанавливаем положения счетчика на минимальное значение
        dispatch(ResetCountAC(settings.min))
        setIsDisable(true) //После сета значений сетать нечего
        dispatch(SetErrorAC(''))

        // //Сохранение засетанных значений в local storage
        // localStorage.setItem("max value", JSON.stringify(props.max))
        // localStorage.setItem("start value", JSON.stringify(props.min))
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
                           defaultValue={settings.max}
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
                           defaultValue={settings.min}
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