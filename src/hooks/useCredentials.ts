import { useSelector } from "react-redux";
import * as _ from "lodash";

const useCredentials = () => {
    const credentials = useSelector((state) => _.get(state, "auth.loginDetails.token", null));
    return credentials;
};

export default useCredentials;
