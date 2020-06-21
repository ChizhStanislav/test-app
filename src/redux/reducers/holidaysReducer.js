const UPDATE_FULL_NAME = 'UPDATE_FULL_NAME';
const UPDATE_POSITION = 'UPDATE_POSITION';
const UPDATE_BIRTHDAY = 'UPDATE_BIRTHDAY';
const REMOVE_HOLIDAY = 'REMOVE_HOLIDAY';
const SAVE_HOLIDAY = 'SAVE_HOLIDAY';
const SET_HOLIDAYS = 'SET_HOLIDAYS';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

let initialState = {
    holidays: [],
    isFetching: false
};

const holidaysReducer = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_FULL_NAME:
            return state;
        case UPDATE_POSITION:
            return state;
        case UPDATE_BIRTHDAY:
            return state;
        case SAVE_HOLIDAY:
            return state;
        case SET_HOLIDAYS:
            return {...state, holidays: [...action.holidays]};
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching};
        case REMOVE_HOLIDAY:
            return state;
        default:
            return state;
    }

};

export const saveHoliday = () => ({type: SAVE_HOLIDAY});
export const removeHoliday = (id) => ({type: REMOVE_HOLIDAY, id: id});
export const updateHolidayFullName = () => ({type: UPDATE_FULL_NAME});
export const updateHolidayPosition = () => ({type: UPDATE_POSITION});
export const updateHolidayBirthDay = () => ({type: UPDATE_BIRTHDAY});
export const setHolidays = (holidays) => ({type: SET_HOLIDAYS, holidays});
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});

export default holidaysReducer;

