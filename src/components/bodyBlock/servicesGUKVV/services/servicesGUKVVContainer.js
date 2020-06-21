import {connect} from "react-redux";
import ServicesGUKVV from "./servicesGUKVV";
import {setServicesGUKVVAC} from "../../../../redux/reducers/servicesGUKVVReducer";


let mapStateToProps = (state) => {
    return {
        services: state.servicesGUKVVPage.servicesGUKVV
    };
};

let mapDispatchToProps = (dispatch) => {
    return {
        saveServiceGUKVV: () => {
            dispatch();
        },
        updateServiceGUKVV: () => {

        },
        deleteServiceGUKVV: () => {

        },
        setServicesGUKVV: (services) => {
            dispatch(setServicesGUKVVAC(services));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ServicesGUKVV);