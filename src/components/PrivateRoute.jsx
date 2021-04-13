import {Route, Navigate} from "react-router-dom"
import {useLogin} from "../context/authContext"

export const PrivateRoute = ({path, ...props}) => {
    const {login} = useLogin();
    return login ? <Route path={path} {...props} /> : <Navigate state={{from: path}} replace to="/login" />
}