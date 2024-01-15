import {useAuth} from "react-oidc-context";
import Loading from "./Loading";
import {Outlet} from "react-router-dom";

const ProtectedRoute = (): any => {
    const auth = useAuth();

    console.log(auth);
    if (auth.isLoading) {
        return Loading;
    } else if (!auth.isAuthenticated) {
        auth.signinRedirect({redirect_uri: window.location.href})
            .then((result) => console.log("Success! ", result))
            .catch((error) => {
                console.log(error)
            });
        return null;
    }

    return < Outlet/>;
}

export default ProtectedRoute;
