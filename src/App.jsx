import React, { useEffect, useState } from "react";
import InputSection from "./components/InputSection";
import OutputSection from "./components/OutputSection";
import MapSection from "./components/MapSection";
import axios from "axios";

function App() {
  //test
  const fetchData = async () => {
    const results = await axios.get("/.netlify/functions/helloWorld");
    console.log(results);
  };

  useEffect(() => {
    fetchData();
  }, []);

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
