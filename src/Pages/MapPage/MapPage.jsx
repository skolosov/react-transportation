import { useEffect, useMemo } from 'react';
import { LeafletMap } from '../../components/LeafletMap/LeafletMap';
import { useDispatch, useSelector } from 'react-redux';
import { getTransportations } from '../../redux/generalSlice';
import {
    selectRouteLatlng,
    selectTransportations,
    selectActiveApplicationRecord,
} from '../../redux/generalSelectors';
import Flex from '../../components/Flex/Flex';

export const MapPage = () => {
    const dispatch = useDispatch();
    const transportations = useSelector(selectTransportations);
    const activeRow = useSelector(selectActiveApplicationRecord);
    const route = useSelector(selectRouteLatlng);

    useEffect(() => {
        dispatch(getTransportations());
    }, []);

    const center = useMemo(() => {
        if (activeRow) {
            return {
                lat: activeRow.lat,
                lng: activeRow.lng,
            };
        }
        return null;
    }, [activeRow]);

    const markers = useMemo(() => {
        if (activeRow) {
            const markers = transportations.map((item) => {
                return {
                    isPerson: false,
                    position: {
                        lat: item.lat,
                        lng: item.lng,
                    },
                };
            });
            markers.push({
                isPerson: true,
                position: {
                    lat: activeRow.lat,
                    lng: activeRow.lng,
                },
            });
            return markers;
        }
        return [];
    }, [activeRow, transportations, route]);

    return <Flex grow={1} direction="column">
        <LeafletMap markers={markers} center={center} route={route} />
    </Flex>;
};