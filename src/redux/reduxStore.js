import {combineReducers, createStore} from "redux";
import holidaysReducer from "./reducers/holidaysReducer";
import servicesGUKVVReducer from "./reducers/servicesGUKVVReducer";
import servicesMVDRBReducer from "./reducers/servicesMVDRBReducer";

let reducers = combineReducers({
    holidaysPage: holidaysReducer,
    servicesGUKVVPage: servicesGUKVVReducer,
    servicesMVDRBPage: servicesMVDRBReducer
});

let store = createStore(reducers);

export default store;