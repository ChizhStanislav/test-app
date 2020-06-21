import {connect} from "react-redux";
import TopPanel from "./topPanel";

let mapStateToProps = (state) => {
    return {
        servicesGUKVV: state.servicesGUKVVPage.servicesGUKVV,
        servicesMVDRB: state.servicesMVDRBPage.servicesMVDRB
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
        setTopPanel: (links) => {

        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TopPanel);