import React, { useState } from "react";
import InputSection from "./components/InputSection";
import OutputSection from "./components/OutputSection";
import MapSection from "./components/MapSection";

function App() {
  const [data, setData] = useState({
    ip: "...loading",
    region: "...loading",
    city: "...loading",
    postalCode: "...loading",
    timezone: "...loading",
    isp: "...loading",
    lat: "",
    lng: "",
  });

  return (
    <>
      <main>
        <InputSection setData={setData} />
        <OutputSection data={data} />
        <MapSection data={data} />
      </main>
    </>
  );
}

export default App;
