import { Route, Switch } from 'react-router-dom';
import React from 'react';
import { RegistrationPage } from './pages/Registration';
import { LandingPage } from './pages/LandingPage/LandingPage';
import { LoginPage } from './pages/Login';

export const Routes = () => {
    return (
        <Switch>
            <Route path="/registration">
                <RegistrationPage />
            </Route>
            <Route path="/login">
                <LoginPage />
            </Route>
            <Route path="/">
                <LandingPage />
            </Route>
        </Switch>
    );
}