export type RemoveTodolistActionType = {
    type: 'REMOVE-TODOLIST',
    id: string,
}
export type ActionsType = RemoveTodolistActionType;

const initialState = {
    count: 0,
};

export const countReducer = (state = initialState, action: ActionsType)  => {
    switch (action.type) {
        case 'REMOVE-TODOLIST':
            return state
        default:
            return state
    }
}

export const RemoveTodolistAC = (todolistId: string): RemoveTodolistActionType => {
    return { type: 'REMOVE-TODOLIST', id: todolistId} as const
}