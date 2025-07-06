import { combineReducers } from "redux";
import { createReduxHistoryContext } from "redux-first-history";
import { createBrowserHistory } from "history";

// Slice imports
import auth from "../../containers/Auth/reducer";

const { createReduxHistory, routerMiddleware, routerReducer } = createReduxHistoryContext({ history: createBrowserHistory() });

const reducers = combineReducers({
    router: routerReducer,
    auth
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