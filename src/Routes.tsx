import { Route, Switch } from 'react-router-dom';
import React from 'react';
import { RegistrationPage } from './pages/RegistrationPage/RegistrationPage';
import { LandingPage } from './pages/LandingPage/LandingPage';
import { AuthProvider } from './providers/auth.provider';
import { WelcomePage } from './pages/WelcomePage/WelcomePage';

export const Routes = () => {
    return (
        <Switch>
            <Route path="/registration">
                <AuthProvider>
                    <RegistrationPage />    
                </AuthProvider>
            </Route>
            <Route path="/login">
                <RegistrationPage />
            </Route>
            <Route path="/welcome">
                <WelcomePage />
            </Route>
            <Route path="/">
                <LandingPage />
            </Route>
        </Switch>
    );
}