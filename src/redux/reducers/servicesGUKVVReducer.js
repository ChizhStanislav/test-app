const UPDATE_SERVICE_GUKVV = 'UPDATE_SERVICE_GUKVV';
const DELETE_SERVICE_GUKVV = 'DELETE_SERVICE_GUKVV';
const SAVE_SERVICE_GUKVV = 'SAVE_SERVICE_GUKVV';
const SET_SERVICES_GUKVV = 'SET_SERVICES_GUKVV';

let initialState = {
    servicesGUKVV: []
};

const servicesGUKVVReducer = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_SERVICE_GUKVV:
            return state;
        case SAVE_SERVICE_GUKVV:
            return state;
        case DELETE_SERVICE_GUKVV:
            return state;
        case SET_SERVICES_GUKVV:
            return {...state, servicesGUKVV: [...action.servicesGUKVV]};
        default:
            return state;
    }

};

export const saveHolidayAC = () => ({type: SAVE_SERVICE_GUKVV});
export const deleteHolidayAC = (id) => ({type: DELETE_SERVICE_GUKVV, id});
export const updateHolidayAC = (birthDay, fullName, position) => ({
    type: UPDATE_SERVICE_GUKVV,
    birthDay: birthDay,
    fullName: fullName,
    position: position

});
export const setServicesGUKVVAC = (servicesGUKVV) => ({type: SET_SERVICES_GUKVV, servicesGUKVV});

export default servicesGUKVVReducer;