import { combineReducers } from "redux";
import amountReducers from "./amountReducers";
import Itemreducer from "./itemReducers";

const reducers = combineReducers({
    amount : amountReducers,
    basketitem : Itemreducer
})

export default reducers;