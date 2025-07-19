import React, { useRef, useEffect } from 'react';
import './Map.css';

const Map = (props) => {
  const mapRef = useRef();
  const { center, zoom } = props;

  // TODO: adjust API key restrictions after deployment
  useEffect(() => {
    const initializeMap = async () => {
      try {
        const { Map } = await window.google.maps.importLibrary('maps');
        const { AdvancedMarkerElement } = await window.google.maps.importLibrary('marker');

        const map = new Map(mapRef.current, {
          center,
          zoom,
          mapId: 'b2e16429dde81b37b33e7a9e',
        });

        new AdvancedMarkerElement({
          map,
          position: center,
        });
      } catch (err) {
        console.error('Google Maps library load failed or misconfigured:', err);
      }
    };

    initializeMap();
  }, [center, zoom]);

  return (
    <div
      ref={mapRef}
      className={`map ${props.className || ''}`}
      style={props.style || { height: '400px', width: '100%' }}
    />
  );
};

export default Map;