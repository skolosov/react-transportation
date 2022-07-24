import { createSlice } from '@reduxjs/toolkit';
import { apiGet } from '../api';

const initialState = {
    applications: [],
    transportations: [],
    activeApplicationId: null,
    activeDivisionId: null,
};

const generalSlice = createSlice({
    name: 'general',
    initialState,
    reducers: {
        setApplicationsAction(state, { payload }) {
            state.applications = payload;
        },
        setTransportationsAction(state, { payload }) {
            state.transportations = payload;
        },
        setActiveApplicationIdAction(state, { payload }) {
            state.activeApplicationId = payload;
        },
        setActiveDivisionIdAction(state, { payload }) {
            state.activeDivisionId = payload;
        },
        setDivisionInApplicationsAction(state, { payload }) {
            const idx = state.applications.findIndex(
                (item) => item.id === payload.id);
            state.applications[idx] = payload;
        },
    },
});

export const general = generalSlice.reducer;
export const {
    setApplicationsAction,
    setTransportationsAction,
    setActiveApplicationIdAction,
    setActiveDivisionIdAction,
    setDivisionInApplicationsAction,
} = generalSlice.actions;


export const getApplications = () => async (dispatch) => {
    const data = await apiGet('applications');
    dispatch(setApplicationsAction(data));
};

export const getTransportations = () => async (dispatch) => {
    const data = await apiGet('transportation_department');
    dispatch(setTransportationsAction(data));
};

export const setActiveApplicationAndDivision = ({ key, record }) => (dispatch) => {
    console.log({ key, record });
    dispatch(setActiveApplicationIdAction(key));
    dispatch(setActiveDivisionIdAction(record?.divisionId));
};

export const setDivisionInApplications = ({ record, divisionId }) => (dispatch) => {
    const updateRecord = { ...record, divisionId };
    dispatch(setDivisionInApplicationsAction(updateRecord));
    dispatch(setActiveApplicationAndDivision({
        key: updateRecord.id,
        record: updateRecord,
    }));
};

