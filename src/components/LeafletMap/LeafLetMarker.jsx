import {
    Marker,
    Popup
} from 'react-leaflet';
import L from 'leaflet';
import { iconPerson, iconTransportation } from './components/Icon';

export const LeafLetMarker = ({ isPerson, position, popupComponent }) => {
    return <Marker
        icon={isPerson ? iconPerson : iconTransportation}
        position={L.latLng(position)}
    >
        {popupComponent && <Popup>{popupComponent}</Popup>}
    </Marker>;
};