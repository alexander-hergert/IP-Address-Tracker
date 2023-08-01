import React from "react";
import { styled } from "styled-components";

/***********************Styles*************************/
//variables
const cornerSize = "1rem";
const activeColor = "hsl(0, 0%, 17%)";
//variables

const Section = styled.section`
  padding: 4em;
  background-image: url("../src/assets/images/pattern-bg-desktop.png");
  background-repeat: no-repeat;
  background-size: cover;
  text-align: center;
  height: 25vh;
`;

const H1 = styled.h1`
  color: white;
`;

const Form = styled.form`
  width: 100%;
`;

const Input = styled.input`
  padding: 1rem;
  width: 30%;
  border-top-left-radius: ${cornerSize};
  border-bottom-left-radius: ${cornerSize};
`;

const Button = styled.button`
  background-color: black;
  color: white;
  padding: 1rem;
  border-top-right-radius: ${cornerSize};
  border-bottom-right-radius: ${cornerSize};
  &:hover {
    cursor: pointer;
    background-color: ${activeColor};
  }
`;

/***********************Component*************************/



const InputSection = () => {
  return (
    <Section>
      <H1>IP Address Tracker</H1>
      <Form>
        <Input type="text" placeholder="Search for any IP address or domain" />
        <Button name="search">
          <img src="../src/assets/images/icon-arrow.svg" alt="icon" />
        </Button>
      </Form>
    </Section>
  );
};

export default InputSection;
