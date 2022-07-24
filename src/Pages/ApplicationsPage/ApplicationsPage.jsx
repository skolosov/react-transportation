import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    getApplications,
    setActiveApplicationAndDivision,
    setDivisionInApplications,
} from '../../redux/generalSlice';
import {
    selectAplications,
    selectActiveApplicationId,
    selectTransportations
} from '../../redux/generalSelectors';
import Table from '../../components/Table/Table';
import { getColumns } from './columns';

export const ApplicationsPage = () => {
    const dispatch = useDispatch();
    const applications = useSelector(selectAplications);
    const transportations = useSelector(selectTransportations);
    const selected = useSelector(selectActiveApplicationId);

    const onChangeRow = useCallback(({ keys, records }) => {
        dispatch(setActiveApplicationAndDivision({
            key: keys[0],
            record: records[0],
        }));
    }, []);

    const onChangeDivision = useCallback((record, value) => {
        dispatch(setDivisionInApplications({ record, divisionId: value }));
    }, []);

    useEffect(() => {
        dispatch(getApplications());
    }, []);

    const columns = getColumns(transportations, onChangeDivision);

    return <Table
        columns={columns}
        data={applications}
        onChangeRow={onChangeRow}
        selected={[selected]}
    />;
};