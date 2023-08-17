import { createStore, applyMiddleware, compose } from "redux";
import reducer from "./reducer";
import thunkMiddleware from "redux-thunk";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//conecta con redux dev tools

const store = createStore(
    reducer,
    composeEnhancer(applyMiddleware(thunkMiddleware))//conecta con redux dev tools y permite hacer llamadas asíncronas a un servidor
);

export default store;