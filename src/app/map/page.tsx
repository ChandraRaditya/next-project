"use client";

import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./custom.css";

const Map = () => {
  return (
    <div className="h-screen grid place-items-center map">
      <div className="flex flex-col items-center gap-4 w-screen">
        <h2 className="font-extrabold text-xl">Map</h2>
        <div className="max-h-[800px] min-h-[800px] w-[1100px] bg-red-700">
          <MapContainer
            center={[-7.7325, 109.0154]}
            zoom={13}
            scrollWheelZoom={false}
            style={{ height: "800px" }}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[-7.7325, 109.0154]}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </div>
  );
};

export default Map;
