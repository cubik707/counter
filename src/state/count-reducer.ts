export type IncrementActionType = {
    type: 'INCREMENT',
    step: number,
}

export type ResetActionType = {
    type: 'RESET',
    minValue: number
}

export type ActionsType = IncrementActionType | ResetActionType;

const initialState = {
    count: 0
};

export const countReducer = (state = initialState, action: ActionsType)  => {
    switch (action.type) {
        case 'INCREMENT':
            return {...state, count: state.count + action.step}
        case "RESET":
            return {...state, count: action.minValue}
        default:
            return state
    }
}

export const IncrementAC = (step: number): IncrementActionType => {
    return { type: 'INCREMENT', step} as const
}

export const ResetAC = (minValue: number): ResetActionType => {
    return { type: 'RESET', minValue} as const
}