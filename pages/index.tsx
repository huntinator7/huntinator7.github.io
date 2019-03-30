import React from "react";
import { Screen } from "../components/screen";
import styled from "styled-components";
import { color } from "../constants/color";

export default function Login() {
  return (
    <Screen>
      <CenterScreen>
        <WelcomeText>Welcome to Merje</WelcomeText>
        <InputBox>
          <input />
        </InputBox>
      </CenterScreen>
    </Screen>
  );
}

const CenterScreen = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  flex-direction: column;
`;

const WelcomeText = styled.span`
  font-family: Arial, Helvetica, sans-serif;
  color: ${color.main};
  font-size: 4.5em;
  align-self: center;
  justify-self: center;
`;

const InputBox = styled.div`
  width: 500px;
  max-width: 90vw;
  justify-content: center;
  align-items: center;
  display: flex;
  background-color: ${color.main};
  padding: 10px;
  margin-top: 10px;
`;
