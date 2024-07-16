import {Button} from "./Button";
import c from "./Counter.module.css"

type CounterPropsType = {
};

export type CountType = {
    count: number
}
export const Counter = (props: CounterPropsType) => {
    //Переменные состояния о том, достигнута ли верхняя или нижняя граница
    const isCountMax = props.count === props.max;
    const isCountMin = props.count === props.min;

    //Обработка нажатия на кнопке инкрементирования
    const countIncHandler = () => {
        if (props.count < props.max) {
            props.changeCount(props.count + props.step);
        }
    }

    //Обработка нажатия на кнопке сброса
    const countResetHandler = () => {
        props.changeCount(props.min);
    }
    debugger
    //Определение сообщения для вывода
    const printValue = props.error ? props.error : `${props.count}`;
    //Опеределение класса сообщения для вывода
    const counterValueClassName = `${c.counter} ${isCountMax || props.error ? c.error : ''}`
    return (
        <div className={c.box}>
            <div className={counterValueClassName}>{printValue}</div>

            <div className={c.btnWrapper}>
                <Button className={`${c.button} ${isCountMax ? c.disable : ''}`} title={'inc'} onClick={countIncHandler} disable={isCountMax || !!props.error}/>
                <Button className={`${c.button} ${isCountMin ? c.disable : ''}`} title={'reset'} onClick={countResetHandler} disable={isCountMin || !!props.error}/>
            </div>

        </div>
    );
};