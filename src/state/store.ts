import {combineReducers, createStore} from "redux";

const rootReducer = combineReducers({

})

type AppRootReducer = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer)

// @ts-ignore
window.store = store