import { createStore, applyMiddleware, compose } from 'redux';
import thunk from "redux-thunk";
import rootReducer from "../reducer/index";
const win = window;
const middleware = [];
// if (process.env.NODE_ENV !== 'production') {
//     middleware.push(require('redux-immutable-state-invariant').default());
// }

middleware.push(thunk);
const reduxEnhancers = compose(
    applyMiddleware(...middleware),
    (win && win.devToolsExtension ? win.devToolsExtension() : f => f)
)
const initState = {}
const store = createStore(rootReducer, initState, reduxEnhancers);
window.store = store;
export default store;