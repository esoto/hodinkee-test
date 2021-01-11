import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from 'redux-saga';

import { rootReducer } from 'store/reducers';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: rootReducer,
    middleware: [sagaMiddleware],
    devTools: true
})

sagaMiddleware.run(rootSaga);

export default store;
