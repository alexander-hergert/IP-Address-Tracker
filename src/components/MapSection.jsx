import React, { useEffect } from "react";
import { styled } from "styled-components";
import L from "leaflet";

/***********************Styles*************************/

const Div = styled.div`
  height: 55vh;
`;

/***********************Component*************************/

const MapSection = ({ data }) => {
  //Set the map
  useEffect(() => {
    const map = L.map("map").setView([data.lat, data.lng], 13);
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution: "© OpenStreetMap",
    }).addTo(map);

    const customIcon = L.icon({
      iconUrl: "../public/assets/images/icon-location.svg",
      iconSize: [32, 32],
    });

    L.marker([data.lat, data.lng], { icon: customIcon })
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
