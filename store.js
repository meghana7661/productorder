import { createStore, applyMiddleware } from "redux";
import order from '../reducers/orderreducer';
import thunk from 'redux-thunk';
export default () => {
    alert("called");
    return createStore(order, applyMiddleware(thunk));
};