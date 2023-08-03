import React, { useState } from "react";
import InputSection from "./components/InputSection";
import OutputSection from "./components/OutputSection";
import MapSection from "./components/MapSection";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState({});

  return (
    <>
      <main>
        <InputSection setData={setData} setIsLoading={setIsLoading} />
        <OutputSection data={data} isLoading={isLoading} />
        <MapSection data={data} />
      </main>
    </>
  );
}

export default App;
