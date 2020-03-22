import React from 'react';
import styled from 'styled-components';
import { Button } from '../components/Button';
import { Typography } from '@material-ui/core';

const MainContent = styled.main`
  background-color: #edf6fe;
  color: #ffffff;
  font-family: 'Acumin Pro';
  position: relative;
  height: 100vh;
`;

const Logo = styled.img`
  width: 341px;
  height: 93px;
  margin: 64px 0 0 64px;
  position: relative;
  z-index: 3;
`;

const HeroContainer = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 3;
  position: relative;
  color: #f4821e;
`;

const DiagonalLine = styled.svg`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 70vh;
  z-index: 2;
`;

const BackgroundImage = styled.img`
  z-index: 1;
  width: 100%;
  height: 60vh;
`;

export const LandingPage = () => {
  return (
      <MainContent>
        <Logo src={require('../assets/images/logo.png')}></Logo>
        <HeroContainer>
          <Typography variant="h2" component="h1">
            Die Tafel kommt zu dir!
          </Typography>
          <Typography variant="h4" component="h2" gutterBottom>
            Melde dich jetzt an &amp; bekomme die Lebensmittel nach Hause geliefert
          </Typography>
          <Button color="secondary" variant="contained" style={{ marginTop: '2rem' }}>Ich brauche Hilfe</Button>
        </HeroContainer>
        <DiagonalLine
          width="100%"
          height="60%"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <polygon fill={'#edf6fe'} points="0,0 100,0 100,30 0,45" />
        </DiagonalLine>
        <BackgroundImage src={require('../assets/images/fruits.jpg')} />
      </MainContent>
  );
};

