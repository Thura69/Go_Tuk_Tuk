import { useEffect, useState } from "react";
import { Map, AdvancedMarker } from "@vis.gl/react-google-maps";
import { io } from "socket.io-client";
import TUKTUK from "../../assets/Location icon.svg";


type Driver = {
  socketId: string;
  driver: {
    id: string;
    name: string;
    profile_picture_url: string;
    status: string;
    vehicle_number: string;
    phone: string;
    is_online: boolean;
  };
  gps: {
    speed: number;
    heading: number;
    altitude: number;
    accuracy: number;
    longitude: number;
    latitude: number;
  };
};

type Poi = {
  key: string;
  photo: string;
  licenseNo: string;
  location: google.maps.LatLngLiteral;
};

const PoiMarkers = (props: { pois: Poi[] }) => {
  return (
    <>
      {props.pois.map((poi: Poi) => (
        <AdvancedMarker key={poi.key} position={poi.location}>
          <div
            id={poi.key}
            className="relative flex items-center justify-center"
          >
            <img className="w-[50px]" src={TUKTUK} alt="tuktuk" />
            <img
              className="w-[40px] h-[40px] rounded-full top-[5.5px] absolute"
              src={
                poi.photo
                  ? poi.photo
                  : "https://cdn0.iconfinder.com/data/icons/set-ui-app-android/32/8-512.png"
              }
              alt="Driver profile"
            />
          </div>
          {/* Tooltip for displaying the driver's license number */}
          <div className="absolute bottom-[60px] left-1/2 transform -translate-x-1/2 p-2 bg-white shadow-md rounded-md text-sm text-black">
            {poi.licenseNo}
          </div>
        </AdvancedMarker>
      ))}
    </>
  );
};

export const Maps = () => {
  const [locations, setLocations] = useState<Poi[]>([]); // Start with an empty array

  // Handler for updating the locations of all markers in real time
  useEffect(() => {
    const socket = io("wss://rest.gomdy.taxisolutionmm.com/");

    // Listen for real-time driver location updates
    socket.on("allDriverLocation", (data: Driver[]) => {
      const updatedLocations: Poi[] = data.map((driver: Driver) => ({
        key: driver.driver.id, // Use unique driver id for marker key
        photo: driver.driver.profile_picture_url,
        licenseNo: driver.driver.vehicle_number,

        location: {
          lat: driver.gps.latitude,
          lng: driver.gps.longitude,
        },
      }));

      setLocations(updatedLocations); // Update the locations state with new data
    });

    // Clean up the socket connection on component unmount
    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <div className="p-3 bg-gray-100">
      <div className="p-3 bg-white">
        <Map
          defaultZoom={13}
          mapId={"bf51a910020fa25a"}
          className="h-[calc(100svh-81px)]"
          defaultCenter={{ lat: 21.97473, lng: 96.08359 }}
        >
          <PoiMarkers pois={locations} />{" "}
          {/* Markers are rendered based on real-time data */}
        </Map>
      </div>
    </div>
  );
};

export default Maps;
