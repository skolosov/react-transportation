import { createSelector } from '@reduxjs/toolkit';

export const selectAplications = ({ general }) => general.applications;
export const selectTransportations = ({ general }) => general.transportations;

export const selectActiveApplicationId = ({ general }) => general.activeApplicationId;
export const selectActiveDivisionId = ({ general }) => general.activeDivisionId;

export const selectActiveApplicationRecord = createSelector(
    [selectActiveApplicationId, selectAplications], (id, applications) => {
        return applications?.find((item) => item.id === id);
    }
);

const selectActiveDivisionRecord = createSelector(
    [selectActiveDivisionId, selectTransportations], (id, transportations) => {
        return transportations?.find((item) => item.id === id);
    }
);

export const selectRouteLatlng = createSelector(
    [selectActiveApplicationRecord, selectActiveDivisionRecord],
    (application, transportation) => {
        if (!application || !transportation) return null;
        return {
            start: {
                lat: application.lat,
                lng: application.lng,
            },
            end: {
                lat: transportation.lat,
                lng: transportation.lng,
            }
        };
    }
);