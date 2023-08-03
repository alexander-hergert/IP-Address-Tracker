import React, { useEffect } from "react";
import { styled } from "styled-components";
import L from "leaflet";

/***********************Styles*************************/
const Div = styled.div`
  height: 65vh;
`;
/***********************Component*************************/

const MapSection = ({ data }) => {
  const { lat = 0, lng = 0 } = data;
  //Set the map
  useEffect(() => {
    const map = L.map("map").setView([lat, lng], 13);
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution: "© OpenStreetMap",
    }).addTo(map);

    const customIcon = L.icon({
      iconUrl: "/assets/images/icon-location.svg",
      iconSize: [32, 32],
    });

    L.marker([lat, lng], { icon: customIcon })
      .addTo(map)
      .bindPopup("Hello, this is a custom marker!");

    //cleanup required
    return () => {
      map.remove();
    };
  }, [data]);

  return (
    <section>
      <Div id="map"></Div>
    </section>
  );
};

export default MapSection;
