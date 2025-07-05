import { combineReducers } from "redux";
import { createReduxHistoryContext } from "redux-first-history";
import { createBrowserHistory } from "history";

const { createReduxHistory, routerMiddleware, routerReducer } = createReduxHistoryContext({ history: createBrowserHistory() });

const reducers = combineReducers({
    router: routerReducer,
});

const appReducer = (state, action) => {
    if(action.type == "auth/logout") {
        state = undefined;
    }
    return reducers(state, action);
}

export const rM = routerMiddleware;
export const createRH = createReduxHistory;

export default appReducer;