import holiday from "../../images/holiday.png";

const UPDATE_SERVICE_MVDRB = 'UPDATE_SERVICE_MVDRB';
const DELETE_SERVICE_MVDRB = 'DELETE_SERVICE_MVDRB';
const SAVE_SERVICE_MVDRB = 'SAVE_SERVICE_MVDRB';
const SET_SERVICES_MVDRB = 'SET_SERVICES_MVDRB';


let initialState = {
    servicesMVDRB: [
        {
            id: 0,
            text: 'Дни ',
            link: ' ',
            imagePath: holiday
        }
    ]
};

const servicesMVDRBReducer = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_SERVICE_MVDRB:
            return state;
        case SAVE_SERVICE_MVDRB:
            return state;
        case DELETE_SERVICE_MVDRB:
            return state;
        case SET_SERVICES_MVDRB:
            return {...state, servicesMVDRB: [...action.servicesMVDRB]};
        default:
            return state;
    }

};

export const saveHolidayAC = () => ({
    type: SAVE_SERVICE_MVDRB
});
export const deleteHolidayAC = (id) => (
    {
        type: DELETE_SERVICE_MVDRB,
        id: id
    }
);
export const updateHolidayAC = (birthDay, fullName, position) => ({
    type: UPDATE_SERVICE_MVDRB,
    birthDay: birthDay,
    fullName: fullName,
    position: position

});

export const setServicesMVDRBAC = (servicesMVDRB) => ({type: SET_SERVICES_MVDRB, servicesMVDRB});

export default servicesMVDRBReducer;