import React from "react";
import styled from "styled-components";
import { RecipientForm } from "../components/RecipientForm";

const MainContent = styled.main`
  background-color: #edf6fe;
  color: #ffffff;
  font-family: "Acumin Pro";
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

export const RequestPage = () => {
  return (
    <MainContent>
      <HeroContainer>
        <RecipientForm
          onSubmit={({ firstName, lastName, phone }) => {
            console.log(firstName, lastName, phone)
          }}
        />
      </HeroContainer>
    </MainContent>
  );
};
