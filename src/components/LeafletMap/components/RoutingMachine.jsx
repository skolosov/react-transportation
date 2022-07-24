import { useEffect, useRef } from 'react';
import L from 'leaflet';
import { createControlComponent } from '@react-leaflet/core';


export const createRoutineMachineLayer = ({ route }) => {
    const instance = L.Routing.control({
        waypoints: [L.latLng(route.start), L.latLng(route.end)],
        lineOptions: {
            styles: [{ color: '#6FA1EC', weight: 4 }]
        },
        show: false,
        collapsible: true,
        addWaypoints: false,
        routeWhileDragging: true,
        draggableWaypoints: true,
        fitSelectedRoutes: true,
        showAlternatives: false,
        language: 'ru',
        createMarker: (i, waypoint, n) => {
            // const marker = L.marker(waypoint.latLng, {
            //     draggable: false,
            //     bounceOnAdd: false,
            //     bounceOnAddOptions: {
            //         duration: 1000,
            //         height: 800,
            //     },
            //     icon: L.icon({
            //         iconUrl: require('../../../images/location-pin.png'),
            //         iconSize: new L.Point(40, 40),
            //     })
            // });
            return null;
        }
    });
    return instance;
};

const Routing = createControlComponent(createRoutineMachineLayer);

const RoutingMachine = ({ route }) => {
    const rMachineRef = useRef();

    // useEffect which responds to changes in waypoints state variable
    useEffect(() => {
        if (rMachineRef.current) {
            rMachineRef.current.setWaypoints(
                [L.latLng(route.start), L.latLng(route.end)]
            );
        }
    }, [rMachineRef, route]);

    return <Routing ref={rMachineRef} route={route} />;
};

export default RoutingMachine;