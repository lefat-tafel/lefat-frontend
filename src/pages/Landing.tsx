import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

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

const Title = styled.h1`
  text-align: center;
  font-size: 64px;
`;

const SubTitle = styled.h2`
  text-align: center;
  font-size: 32px;
`;

const CtaButton = styled(Link)`
  color: white;
  background-color: #38795d;
  width: 300px;
  height: 58px;
  border-radius: 36px;
  border: none;
  font-size: 24px;
  margin-top: 16px;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;

  :hover {
    text-decoration: none;
    color: var(--color-bg);
  }

  :focus {
    outline: none;
  }
`;

const DiagonalLine = styled.svg`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 60vh;
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
          <Title>Die Tafel kommt zu dir!</Title>
          <SubTitle>Melde dich jetzt an &amp; bekomme Lebensmittel geliefert</SubTitle>
          <CtaButton to="/register">Ich brauche Hilfe</CtaButton>
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

