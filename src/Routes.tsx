import { Route, Switch } from 'react-router-dom';
import React from 'react';
import { RegistrationPage } from './pages/Registration';
import { LandingPage } from './pages/Landing';

export const Routes = () => {
    return (
        <Switch>
            <Route path="/">
                <LandingPage />
            </Route>
            <Route path="/registration">
                <RegistrationPage />
            </Route>
            <Route path="/login">
                <RegistrationPage />
            </Route>
        </Switch>
    );
}