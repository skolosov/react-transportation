import React from 'react';
import 'leaflet/dist/leaflet.css';
import 'leaflet/dist/leaflet.js';
import {
    MapContainer,
    TileLayer,
    useMap
} from 'react-leaflet';
import RoutingMachine from './components/RoutingMachine';
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css';
import 'leaflet-routing-machine/dist/leaflet-routing-machine.js';
import { LeafLetMarker } from './LeafLetMarker';

const defaultCenter = {
    lat: 56.322419,
    lng: 43.980289
};

const LocationMarker = ({ markers }) => {
    return markers.map((marker, i) => {
        return <LeafLetMarker key={i} {...marker} />;
    });

};

const MapBody = ({ center, markers, route }) => {
    const map = useMap();

    center && map.panTo(center);

    return (
        <>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {markers.length && <LocationMarker markers={markers} />}
            {route && <RoutingMachine route={route} />}
        </>
    );
};

export const LeafletMap = ({ center, markers, route }) => {
    return (
        <MapContainer
            style={{ height: '100%', width: '100%', zIndex: 10 }}
            center={defaultCenter}
            zoom={13}
            scrollWheelZoom={true}
        >
            <MapBody markers={markers} route={route} center={center} />
        </MapContainer>
    );
};

LeafletMap.defaultProps = {
    center: null,
    markers: [],
    route: null,
};