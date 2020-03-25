import { Route, Switch } from 'react-router-dom';
import React from 'react';
import { RegistrationPage } from './pages/Registration';
import { LandingPage } from './pages/Landing';
import { RecipientFormPage } from './pages/RecipientForm';


export const Routes = () => {
    return (
        <Switch>
            <Route path="/registration">
                <RegistrationPage />
            </Route>
            <Route path="/login">
                <RegistrationPage />
            </Route>
            <Route path="/recipientForm">
                <RecipientFormPage />
            </Route>
            <Route path="/">
                <LandingPage />
            </Route>
        </Switch>
    );
}