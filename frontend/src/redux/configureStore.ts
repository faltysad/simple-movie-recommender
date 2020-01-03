import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunk from 'redux-thunk';

// import exampleDuck from './ducks/exampleDuck';


const rootReducer = combineReducers({
    // example: exampleDuck,

})

const middlewares = [
    applyMiddleware(thunk),
    // Only attach redux dev tool extension on client side & also only attach it when its supported by current browser
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
]

export const configureStore = (initialState: any) => {
     return createStore(rootReducer, initialState, compose(
        ...middlewares
     ));
}


