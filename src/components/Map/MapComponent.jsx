import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import RoutingMachine from './components/RoutingMachine';
import { iconPerson } from './components/Icon';


export default function MapCompoent() {
    // function LocationMarker() {
    //     const [position, setPosition] = useState(null);
    //     const [bbox, setBbox] = useState([]);

    //     const map = useMap();

    //     useEffect(() => {
    //         map.locate().on('locationfound', function (e) {
    //             setPosition(e.latlng);
    //             map.flyTo(e.latlng, map.getZoom());
    //             const radius = e.accuracy;
    //             const circle = L.circle(e.latlng, radius);
    //             circle.addTo(map);
    //             setBbox(e.bounds.toBBoxString().split(','));
    //         });
    //     }, [map]);

    //     return position === null ? null : (
    //         <Marker position={position}>
    //             <Popup>
    //                 You are here. <br />
    //                 Map bbox: <br />
    //                 <b>Southwest lng</b>: {bbox[0]} <br />
    //                 <b>Southwest lat</b>: {bbox[1]} <br />
    //                 <b>Northeast lng</b>: {bbox[2]} <br />
    //                 <b>Northeast lat</b>: {bbox[3]}
    //             </Popup>
    //         </Marker>
    //     );
    // }

    return (
        <MapContainer
            center={[56.3287, 44.002]}
            zoom={1}
            scrollWheelZoom
            style={{ height: '100%' }}
        >
            <Marker icon={iconPerson} position={[51.505, -0.09]} />
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <RoutingMachine />
        </MapContainer>
    );
}