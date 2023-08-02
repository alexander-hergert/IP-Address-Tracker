import React, { useState } from "react";
import InputSection from "./components/InputSection";
import OutputSection from "./components/OutputSection";
import MapSection from "./components/MapSection";

function App() {
  const [data, setData] = useState({
    ip: "---",
    region: "---",
    city: "---",
    postalCode: "---",
    timezone: "---",
    isp: "---",
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
