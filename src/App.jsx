import React from "react";
import InputSection from "./components/InputSection";
import OutputSection from "./components/OutputSection";
import MapSection from "./components/mapSection";
import { styled } from "styled-components";

function App() {
  return (
    <>
      <main>
        <InputSection />
        <OutputSection />
        <MapSection />
      </main>
    </>
  );
}

export default App;
