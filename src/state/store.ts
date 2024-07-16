import {combineReducers, legacy_createStore} from "redux";
import {countReducer} from "./count-reducer";
import {settingsReducer} from "./settings-reducer";

const rootReducer = combineReducers({
    count: countReducer,
    settings: settingsReducer
})

type AppRootReducer = ReturnType<typeof rootReducer>

export const store = legacy_createStore(rootReducer)

// @ts-ignore
window.store = store