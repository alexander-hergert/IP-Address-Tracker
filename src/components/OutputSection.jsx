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
  z-index: 1000;
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
`;

/***********************Component*************************/

const OutputSection = ({ data }) => {
  

  return (
    <Section>
      <Div>
        <p>IP Address</p>
        <p>{data.ip}</p>
      </Div>
      <Div>
        <p>Location</p>
        <p>{`${data.region}, ${data.city}, ${data.postalCode}`}</p>
      </Div>
      <Div>
        <p>Timezone</p>
        <p>{data.timezone}</p>
      </Div>
      <Div>
        <p>ISP</p>
        <p>{data.isp}</p>
      </Div>
    </Section>
  );
};

export default OutputSection;
