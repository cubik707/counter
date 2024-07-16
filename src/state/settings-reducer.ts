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
    error: number,
}


export type ActionsType = SetMaxActionType | SetMinActionType;

const initialState = {
    max: 5,
    min: 0,
    error: false,
    areSettingSet: true
};

export const settingsReducer = (state = initialState, action: ActionsType)  => {
    switch (action.type) {
        case 'SET-MAX':
            return {...state, max: action.max}
        case "SET-MIN":
            return {...state, min: action.min}
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