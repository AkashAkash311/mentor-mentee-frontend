import { configureStore } from "@reduxjs/toolkit";
import { presistStore, persistReducer} from "redux-persist"
import createSagaMiddleware from "redux-saga";
import storage from "redux-persist/lib/storage";

import rootReducer, { rM, createRH } from "./reducers";
import rootSaga from "./sagas/index";

const presistConfig = {
    key: "root",
    storage,
    whitelist: []
};

const presistedReducer = persistReducer(presistConfig, rootReducer);

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware, rM];

const store = configureStore({
    reducer: presistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false
        }).concat(middlewares)
});

sagaMiddleware.run(rootSaga);

let persistor = presistStore(store);

const { dispatch } = store;

const history = createRH(store);

export { store, dispatch, persistor, history };