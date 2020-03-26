import { Route, Switch } from 'react-router-dom';
import React from 'react';
import { RegistrationPage } from './pages/Registration';
import { LandingPage } from './pages/Landing';
import { RequestPage } from './pages/RequestPage';


export const Routes = () => {
    return (
        <Switch>
            <Route path="/registration">
                <RegistrationPage />
            </Route>
            <Route path="/login">
                <RegistrationPage />
            </Route>
            <Route path="/recipient">
                <RequestPage />
            </Route>
            <Route path="/">
                <LandingPage />
            </Route>
        </Switch>
    );
}