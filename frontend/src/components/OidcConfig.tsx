import {AuthProviderProps} from "react-oidc-context";

const defaultRedirectUri = window.location.origin + '/home';

const OidcConfig: AuthProviderProps = {
    authority: (process.env.REACT_APP_KEYCLOAK_BASE_URL ?? 'http://localhost:8443') + '/realms/app',
    client_id: 'frontend-web',
    redirect_uri: defaultRedirectUri,
    onSigninCallback: () => {
        // You must provide an implementation of onSigninCallback to oidcConfig to remove the payload
        // from the URL upon successful login.
        // Otherwise, if you refresh the page and the payload is still there, signinSilent - which handles renewing your token - won't work.

        window.history.replaceState(
            {},
            document.title,
            window.location.pathname
        )
    }
}

export default OidcConfig;