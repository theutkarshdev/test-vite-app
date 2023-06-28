import React, { useState } from "react";
import { GoogleMap, InfoWindow, Marker, useLoadScript } from "@react-google-maps/api";

const Google = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
  });
  const [mapRef, setMapRef] = useState();
  const [isOpen, setIsOpen] = useState(false);
  const [infoWindowData, setInfoWindowData] = useState();

  const markers = [
    { address: "Taj Mahal", lat: 27.175335673428172, lng: 78.04209928206996 },
    { address: "Red Fort", lat: 28.65676826452433, lng: 77.24094395739083 },
    { address: "Address1", lat: 18.5642, lng: 73.7769 },
    { address: "Address2", lat: 28.5204, lng: 73.8567 },
    { address: "Address3", lat: 18.5314, lng: 33.8446 },
    { address: "Address4", lat: 18.5642, lng: 71.7769 },
    { address: "Address5", lat: 18.5204, lng: 83.8567 },
    { address: "Address6", lat: 12.5314, lng: 73.8446 },
    { address: "Address7", lat: 12.5642, lng: 73.7769 },
  ];

  const onMapLoad = (map) => {
    setMapRef(map);
    const bounds = new google.maps.LatLngBounds();
    markers?.forEach(({ lat, lng }) => bounds.extend({ lat, lng }));
    map.fitBounds(bounds);
  };

  const handleMarkerClick = (id, lat, lng, address) => {
    mapRef?.panTo({ lat, lng });
    setInfoWindowData({ id, address });
    setIsOpen(true);
  };

  return (
    <div className="max-w-screen-xl mx-auto my-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="grid grid-cols-2 gap-4 location-card">
          {markers.map(({ address, lat, lng }, ind) => (
            <div
              key={ind}
              className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700"
            >
              <div
                className="relative overflow-hidden bg-cover bg-no-repeat"
                data-te-ripple-init
                data-te-ripple-color="light"
              >
                <img className="rounded-t-lg" src="https://tecdn.b-cdn.net/img/new/standard/nature/186.jpg" />
                <a href="#!">
                  <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100" />
                </a>
              </div>
              <div className="p-6">
                <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                  {address}
                </h5>
                <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                  Lat: {lat} <br /> Lng : {lng}
                </p>
                <button
                  href="#"
                  onClick={() => {
                    handleMarkerClick(ind, lat, lng, address);
                  }}
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Read more
                </button>
              </div>
            </div>
          ))}
        </div>
        <div>
          <div className="App">
            {!isLoaded ? (
              <h1>Loading...</h1>
            ) : (
              <GoogleMap
                mapContainerClassName="map-container"
                onLoad={onMapLoad}
                zoom={6}
                onClick={() => setIsOpen(false)}
              >
                {markers.map(({ address, lat, lng }, ind) => (
                  <Marker
                    key={ind}
                    position={{ lat, lng }}
                    onClick={() => {
                      handleMarkerClick(ind, lat, lng, address);
                    }}
                  >
                    {isOpen && infoWindowData?.id === ind && (
                      <InfoWindow
                        onCloseClick={() => {
                          setIsOpen(false);
                        }}
                      >
                        <div className="place-map-card">
                          <img src="https://via.placeholder.com/100" />
                          <h3>{infoWindowData.address}</h3>
                        </div>
                      </InfoWindow>
                    )}
                  </Marker>
                ))}
              </GoogleMap>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Google;
