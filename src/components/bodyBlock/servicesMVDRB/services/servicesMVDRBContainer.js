import {connect} from "react-redux";
import ServicesMVDRB from "./servicesMVDRB";
import {setServicesMVDRBAC} from "../../../../redux/reducers/servicesMVDRBReducer";


let mapStateToProps = (state) => {
    return {
        services: state.servicesMVDRBPage.servicesMVDRB
    };
};

let mapDispatchToProps = (dispatch) => {
    return {
        saveHoliday: () => {

        },
        updateHoliday: () => {

        },
        deleteHoliday: () => {

        },
        setServicesMVDRB: (services) => {
            dispatch(setServicesMVDRBAC(services));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ServicesMVDRB);