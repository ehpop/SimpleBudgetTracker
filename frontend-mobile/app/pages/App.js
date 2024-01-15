import React, { useState, useEffect } from 'react';
import { View, Button, Alert } from 'react-native';
import { authorize, refresh } from 'react-native-app-auth';

const config = {
    issuer: 'https://facebook.com',
    clientId: 'frontend-mobile',
    redirectUrl: 'frontend-mobile:/pages/Home',
    scopes: ['openid', 'profile', 'email'],
};

const Test = () => {
    const [authState, setAuthState] = useState(null);

    useEffect(() => {
        // Check if there is a saved authState (user is already authenticated)
        // and refresh the token if needed
        refreshAuthState();
    }, []);

    const handleLogin = async () => {
        try {
            const result = await authorize(config);
            setAuthState(result);
            // Store result.accessToken and result.refreshToken securely
        } catch (error) {
            Alert.alert('Authentication failed', error.message);
        }
    };

    const refreshAuthState = async () => {
        // Check if there is a saved authState
        // and refresh the token if it's still valid
        // This is useful for maintaining user sessions
        // even after the app is closed and reopened
        try {
            const result = await refresh(config, {
                refreshToken: authState?.refreshToken,
            });
            setAuthState(result);
            // Update stored tokens if necessary
        } catch (error) {
            // Handle refresh token failure or expiration
        }
    };

    return (
        <View>
            {authState ? (
                <Button title="Refresh Token" onPress={refreshAuthState} />
            ) : (
                <Button title="Login" onPress={handleLogin} />
            )}
        </View>
    );
};

export default Test;
