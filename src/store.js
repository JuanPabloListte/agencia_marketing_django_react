import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from './redux/reducers' //rootReduceer = index.js
import { composeWithDevTools } from "redux-devtools-extension";

const initialState = {} //se llena de variables
const middleWare = [thunk]

const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleWare))
)

export default store