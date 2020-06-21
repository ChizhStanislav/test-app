import {connect} from "react-redux";
import News from "./news";

let mapStateToProps = (state) => {
    return {
        holidays: state.holidaysPage.holidays
    };
};

let mapDispatchToProps = (dispatch) => {
    return {};
};

let newsContainer = connect(mapStateToProps, mapDispatchToProps)(News);

export default newsContainer;