import {combineReducers, legacy_createStore} from "redux";
import {countReducer} from "./count-reducer";
import {settingsReducer} from "./settings-reducer";
import {loadState, saveState} from "../utils/localStorage-utils";

const rootReducer = combineReducers({
    count: countReducer,
    settings: settingsReducer
})

export type AppRootStateType = ReturnType<typeof rootReducer>

const persistedState = loadState();
export const store = legacy_createStore(rootReducer, persistedState);

store.subscribe(() => {
    saveState({
        count: store.getState().count,
        settings: store.getState().settings
    });
});

// @ts-ignore
window.store = store

