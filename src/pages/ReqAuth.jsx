import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

const ReqAuth = ({ children }) => {
    const location = useLocation()
    const auth = useSelector((store) => store.authreducer.isAuth);
    console.log(auth)
    if (!auth) {
        return <Navigate to="/login" state={{from: location}} replace />;
        // login page
    }
    return children;
};
export default ReqAuth;