import React from "react";
import { styled } from "styled-components";

/***********************Styles*************************/
//variables
const textColor = "hsl(0, 0%, 59%)";
//variables

const Section = styled.section`
  display: flex;
  justify-content: space-evenly;
  position: absolute;
  top: 25%;
  left: 50%;
  transform: translateX(-50%);
  padding: 2rem;
  background-color: white;
  width: 57%;
  border-radius: 1rem;
  z-index: 1000;

  @media (max-width: 880px) {
    flex-wrap: wrap;
    text-align: center;
    top: 18%;
    padding: 0;
  }

  @media (max-width: 400px) {
    top: 23%;
  }
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  border-right: 1px solid ${textColor};
  padding-right: 6rem;
  padding-left: 2rem;

  &:last-child {
    border: none;
  }

  @media (max-width: 1330px) {
    padding-right: 2rem;
    padding-left: 2rem;
  }

  @media (max-width: 880px) {
    width: 100%;
    border-style: none;
  }
`;

const P = styled.p`
  color: ${textColor};
  font-size: 0.75rem;
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: -0.5rem;

  @media (max-width: 400px) {
    font-size: 0.5rem;
  }
`;

/***********************Component*************************/

const OutputSection = ({ data }) => {
  return (
    <Section>
      <Div>
        <P>Ip Address</P>
        <p>{data.ip}</p>
      </Div>
      <Div>
        <P>Location</P>
        <p>{`${data.region}, ${data.city}, ${data.postalCode}`}</p>
      </Div>
      <Div>
        <P>Timezone</P>
        <p>{`UTC ${data.timezone}`}</p>
      </Div>
      <Div>
        <P>ISP</P>
        <p>{data.isp}</p>
      </Div>
    </Section>
  );
};

export default OutputSection;
