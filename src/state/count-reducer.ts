import {CountType} from "../components/Counter";

export type IncrementCountActionType = {
    type: 'INCREMENT',
    step: number,
}

export type ResetCountActionType = {
    type: 'RESET',
    minValue: number
}

export type ActionsType = IncrementCountActionType | ResetCountActionType;

const initialState: CountType = {
    count: 0
};

export const countReducer = (state = initialState, action: ActionsType): CountType  => {
    switch (action.type) {
        case 'INCREMENT':
            return {...state, count: state.count + action.step}
        case "RESET":
            return {...state, count: action.minValue}
        default:
            return state
    }
}

export const IncrementCountAC = (step: number): IncrementCountActionType => {
    return { type: 'INCREMENT', step} as const
}

export const ResetCountAC = (minValue: number): ResetCountActionType => {
    return { type: 'RESET', minValue} as const
}