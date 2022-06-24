import React, { ReactNode, useEffect, useRef, useState } from "react";

import useDeepCompareEffect from "use-deep-compare-effect";

interface MapProps extends google.maps.MapOptions {
  children?: ReactNode | ReactNode[];
  style?: { [key: string]: string };
  onClick?: (event: google.maps.MapMouseEvent) => void;
  onIdle?: (map: google.maps.Map) => void;
}

export default function Map({
  onClick,
  onIdle,
  style,
  children,
  ...options
}: MapProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<google.maps.Map>();

  useEffect(() => {
    if (ref.current && !map) {
      setMap(new google.maps.Map(ref.current, {}));
    }
  }, [ref, map]);

  useDeepCompareEffect(() => {
    if (map) {
      map.setOptions(options);
    }
  }, [map, options]);

  useEffect(() => {
    if (map) {
      ["click", "idle"].forEach((event) => {
        google.maps.event.clearListeners(map, event);
      });
      if (onClick) {
        map.addListener("click", onClick);
      }
      if (onIdle) {
        map.addListener("idle", () => onIdle(map));
      }
    }
  }, [map, onClick, onIdle]);

  return (
    <>
      <div ref={ref} style={style} />
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          // set the map prop on the child component
          return React.cloneElement(child, { map });
        }
      })}
    </>
  );
}
