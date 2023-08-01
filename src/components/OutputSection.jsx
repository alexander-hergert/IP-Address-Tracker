import React from "react";
import { styled } from "styled-components";

/***********************Styles*************************/

const Section = styled.section`
  display: flex;
  justify-content: space-around;
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translateX(-50%);
  padding: 2rem;
  border: 1px solid black;
  background-color: white;
  width: 80%;
  border-radius: 1rem;
`;

const Div = styled.section`
  display: flex;
  flex-direction: column;
`;

//Styles

const OutputSection = () => {
  return (
    <Section>
      <Div>
        <p>IP Address</p>
        <p>192.212.174.101</p>
      </Div>
      <Div>
        <p>Location</p>
        <p>Brooklyn, NY 10001</p>
      </Div>
      <Div>
        <p>Timezone</p>
        <p>UTC-05:00</p>
      </Div>
      <Div>
        <p>ISP</p>
        <p>SpaceX Starlink</p>
      </Div>
    </Section>
  );
};

export default OutputSection;
