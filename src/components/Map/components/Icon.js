import L from 'leaflet';

const iconPerson = new L.Icon({
    iconUrl: require('../../../images/map-marker-icon.png'),
    iconRetinaUrl: require('../../../images/map-marker-icon.png'),
    iconAnchor: null,
    popupAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: new L.Point(60, 75),
    className: 'leaflet-div-icon'
});

export { iconPerson };