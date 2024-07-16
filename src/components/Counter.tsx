import {Button} from "./Button";
import c from "./Counter.module.css"
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../state/store";
import {SettingsType} from "./Settings";
import {IncrementCountAC, ResetCountAC} from "../state/count-reducer";

type CounterPropsType = {
};

export type CountType = {
    count: number
}
export const Counter = (props: CounterPropsType) => {
    const settings = useSelector<AppRootStateType, SettingsType>(state => state.settings)
    const count = useSelector<AppRootStateType, CountType>(state => state.count)
    const dispatch = useDispatch();

    const step = 1;

    //Переменные состояния о том, достигнута ли верхняя или нижняя граница
    const isCountMax = count.count === settings.max;
    const isCountMin = count.count === settings.min;

    //Обработка нажатия на кнопке инкрементирования
    const countIncHandler = () => {
        if (count.count < settings.max) {
            dispatch(IncrementCountAC(step))
        }
    }

    //Обработка нажатия на кнопке сброса
    const countResetHandler = () => {
        //------- props.changeCount(props.min);
        dispatch(ResetCountAC(settings.min))
    }

    //Определение сообщения для вывода
    const printValue = settings.error ? settings.error : `${count.count}`;
    //Опеределение класса сообщения для вывода
    const counterValueClassName = `${c.counter} ${isCountMax || settings.error ? c.error : ''}`
    return (
        <div className={c.box}>
            <div className={counterValueClassName}>{printValue}</div>

            <div className={c.btnWrapper}>
                <Button className={`${c.button} ${isCountMax ? c.disable : ''}`} title={'inc'} onClick={countIncHandler} disable={isCountMax || !!settings.error}/>
                <Button className={`${c.button} ${isCountMin ? c.disable : ''}`} title={'reset'} onClick={countResetHandler} disable={isCountMin || !!settings.error}/>
            </div>

        </div>
    );
};