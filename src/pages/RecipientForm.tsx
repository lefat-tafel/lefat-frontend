import React, { Component } from "react";
import styled from 'styled-components';
import { FormControl, 
    FormHelperText, 
    InputLabel, 
    Input, 
    Button } from '@material-ui/core';


const MainContent = styled.main`
  background-color: #edf6fe;
  color: #ffffff;
  font-family: 'Acumin Pro';
  position: relative;
  height: 100vh;
`;

const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 3;
  position: relative;
  color: #f4821e;
`;

export const RecipientFormPage = () => {
    return (
    <MainContent>
        <HeroContainer>
            <FormControl>
                <InputLabel htmlFor="firstname">Vorname</InputLabel>
                <Input id="firstname" aira-describedby="firstname-helper-text" />
                <FormHelperText id="firstname-helper-text">Bitte geben Sie hier Ihren Vornamen ein</FormHelperText>
            </FormControl>

            <FormControl>
                <InputLabel htmlFor="surname">Nachname</InputLabel>
                <Input id="surname" aira-describedby="surname-helper-text" />
                <FormHelperText id="surame-helper-text">Bitte geben Sie hier Ihren Nachnamen ein</FormHelperText>
            </FormControl>

            <FormControl>
                <InputLabel htmlFor="address">Addresse</InputLabel>
                <Input id="address" aira-describedby="address-helper-text" />
                <FormHelperText id="address-helper-text">Bitte geben Sie hier Ihre Addresse ein</FormHelperText>
            </FormControl>

            <Button style={{ marginTop: '2rem' }} size='large'>Absenden</Button>
        </HeroContainer>
    </MainContent>
    );
};