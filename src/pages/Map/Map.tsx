import {
  APIProvider,
  Map,
  AdvancedMarker,
  MapCameraChangedEvent,
} from "@vis.gl/react-google-maps";
import TUKTUK from "../../assets/Location icon.svg";

type Poi = { key: string; location: google.maps.LatLngLiteral };

const locations: Poi[] = [
  { key: "operaHouse", location: { lat: 21.97473, lng: 96.08359 } },
  { key: "Tuk1", location: { lat: 21.949, lng: 96.08359 } },
  { key: "operaHouse", location: { lat: 21.98473, lng: 96.08359 } },
  { key: "operaHouse", location: { lat: 21.98473, lng: 96.08359 } },
  { key: "operaHouse", location: { lat: 25.98473, lng: 97.08359 } },

];

const PoiMarkers = (props: { pois: Poi[] }) => {
  return (
    <>
      {props.pois.map((poi: Poi) => (
        <AdvancedMarker key={poi.key} position={poi.location}>
         <div className=" relative flex items-center justify-center">
         <img className="w-[50px]" src={TUKTUK} alt="tuktuk" />
         <img className="w-[40px] rounded-full top-[5.5px] absolute" src="https://github.com/shadcn.png"/>
         </div>
        </AdvancedMarker>
      ))}
    </>
  );
};

export const Maps = () => {
  return (
    <APIProvider
      apiKey={"AIzaSyBHWnJ99eF2wvCJdFgIRIkpBYyEuZwazFM"}
      onLoad={() => console.log("Maps API has loaded.")}
    >
      <Map
        defaultZoom={13}
        mapId={"bf51a910020fa25a"}
        className="h-[calc(100svh-81px)]"
        defaultCenter={{ lat: 21.97473, lng: 96.08359 }}
        onCameraChanged={(ev: MapCameraChangedEvent) =>
          console.log(
            "camera changed:",
            ev.detail.center,
            "zoom:",
            ev.detail.zoom
          )
        }
      >
        <PoiMarkers pois={locations} />
      </Map>
    </APIProvider>
  );
};
