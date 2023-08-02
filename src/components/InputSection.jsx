import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import fetchData from "../fetchData";

/***********************Styles*************************/
//variables
const cornerSize = "1rem";
const activeColor = "hsl(0, 0%, 17%)";
//variables

const Section = styled.section`
  padding: 4em;
  padding-top: 1rem;
  background-image: url("/assets/images/pattern-bg-desktop.png");
  background-repeat: no-repeat;
  background-size: cover;
  text-align: center;
  height: 25vh;

  @media (max-width: 880px) {
    background-image: url("/assets/images/pattern-bg-mobile.png");
  }
`;

const H1 = styled.h1`
  color: white;

  @media (max-width: 880px) {
    font-size: 1.5rem;
  }
`;

const Form = styled.form`
  width: 100%;
`;

const Input = styled.input`
  padding: 1rem;
  width: 35%;
  border-top-left-radius: ${cornerSize};
  border-bottom-left-radius: ${cornerSize};
  border: none;
  &:hover {
    cursor: pointer;
  }

  @media (max-width: 880px) {
    width: 60%;
  }
`;

const Button = styled.button`
  background-color: black;
  border: none;
  color: white;
  padding: 1rem 1.5rem;
  border-top-right-radius: ${cornerSize};
  border-bottom-right-radius: ${cornerSize};
  &:hover {
    cursor: pointer;
    background-color: ${activeColor};
  }
`;

/***********************Component*************************/

const apiKey = import.meta.env.VITE_API_KEY;

const InputSection = ({ setData }) => {
  const [inputIp, setInputIp] = useState("");

  const url = `https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&ipAddress=${inputIp}`;
  const ipUrl = "https://api.ipify.org/?format=json";

  const fetchAndSet = async (url) => {
    const data = await fetchData(url);
    const values = {
      ip: data.ip,
      region: data.location.region,
      city: data.location.city,
      postalCode: data.location.postalCode,
      timezone: data.location.timezone,
      isp: data.isp,
      lat: data.location.lat,
      lng: data.location.lng,
    };
    setData(values);
  };

  //Initial load
  useEffect(() => {
    const initialFetch = async () => {
      const ownIp = await fetchData(ipUrl);
      const initialUrl = `https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&ipAddress=${ownIp.ip}`;
      fetchAndSet(initialUrl);
    };
    initialFetch();
  }, []);

  const handleChange = (e) => {
    setInputIp(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    fetchAndSet(url);
    e.target[0].value = "";
  };

  return (
    <Section>
      <H1>IP Address Tracker</H1>
      <Form onSubmit={handleSubmit}>
        <Input
          onChange={handleChange}
          type="text"
          placeholder="Search for any IP address or domain"
        />
        <Button>
          <img src="/assets/images/icon-arrow.svg" alt="icon" />
        </Button>
      </Form>
    </Section>
  );
};

export default InputSection;
