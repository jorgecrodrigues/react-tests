import Map from "../components/Map";
import Marker from "../components/Marker";
import Status from "../components/Status";
import { Wrapper } from "@googlemaps/react-wrapper";
import { useState } from "react";

export default function Page() {
  const [m] = useState(new Array(800).fill(undefined));

  return (
    <Wrapper
      apiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY ?? ""}
      render={Status}
      callback={(status, loader) => console.log({ status, loader })}
    >
      <Map
        center={{ lat: -16, lng: -56 }}
        zoom={4}
        style={{ width: "100%", height: "50vh" }}
        onClick={(e: google.maps.MapMouseEvent) =>
          console.log("On Click: ", e.latLng?.toString())
        }
        onIdle={(map: google.maps.Map) =>
          console.log("On Idle: ", map.getCenter()?.toString())
        }
      >
        {m.map((_, i) => (
          <Marker
            key={i}
            position={{
              lat: parseFloat(`-16.${i}`),
              lng: parseFloat(`-56.${i}`),
            }}
          />
        ))}
      </Map>
    </Wrapper>
  );
}
