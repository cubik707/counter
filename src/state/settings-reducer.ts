export type SetMaxActionType = {
    type: 'SET-MAX',
    max: number,
}

export type SetMinActionType = {
    type: 'SET-MIN',
    min: number,
}

export type SetErrorActionType = {
    type: 'SET-ERROR',
    error: string,
}


export type ActionsType = SetMaxActionType | SetMinActionType | SetErrorActionType;

const initialState = {
    max: 5,
    min: 0,
    error: '',
};

export const settingsReducer = (state = initialState, action: ActionsType)  => {
    switch (action.type) {
        case 'SET-MAX':
            return {...state, max: action.max}
        case "SET-MIN":
            return {...state, min: action.min}
        case "SET-ERROR":
            return {...state, error: action.error}
        default:
            return state
    }
}

export const SetMaxAC = (max: number): SetMaxActionType => {
    return { type: 'SET-MAX', max} as const
}

export const SetMinAC = (min: number): SetMinActionType => {
    return { type: 'SET-MIN', min} as const
}

export const SetErrorAC = (error: string): SetErrorActionType => {
    return { type: 'SET-ERROR', error} as const
}