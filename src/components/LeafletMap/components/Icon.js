import L from 'leaflet';

export const iconPerson = new L.Icon({
    iconUrl: require('../../../images/pin.png'),
    iconSize: new L.Point(40, 40),
});

export const iconTransportation = L.icon({
    iconUrl: require('../../../images/location-pin.png'),
    iconSize: new L.Point(40, 40),
});