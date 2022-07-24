import { Table } from 'antd';
import React, { useEffect, useRef } from 'react';
import Flex from '../Flex/Flex';
import styled from 'styled-components';

const SScrollContainer = styled(Flex).attrs({
    grow: 1,
    direction: 'column',
})`
    box-sizing: border-box;
    overflow: auto;
`;

const STableContainer = styled(Flex).attrs({
    grow: 1,
    direction: 'column',
})`
    width: 100%;
    height: 100%;

    .ant-table-thead {
        top: 0;
        position: sticky;
        z-index: 1;
        background-color: white !important;
    }
`;

const ANTDTable = ({ columns, data, onClickRow, onChangeRow, selected }) => {

    const tableRef = useRef();

    const onRow = (record, rowIndex) => {
        return {
            onClick: (e) => {
                onClickRow({ e, record, rowIndex });
            }, // click row
        };
    };

    const setMinWidth = (tableNode) => {
        const cols = tableNode.querySelectorAll('col');
        let i = -1;
        for (const col of cols) {
            col.style.minWidth = columns[i++]?.minWidth || 0;
        }
    };

    useEffect(() => {
        tableRef.current && setMinWidth(tableRef.current);
    }, [tableRef.current]);

    return (
        <SScrollContainer
            className='scrollContainer'
            grow={1}
            direction="column"
        >
            <STableContainer className="tableContainer">
                <Table
                    ref={tableRef}
                    columns={columns}
                    dataSource={data}
                    bordered
                    pagination={false}
                    onRow={onRow}
                    rowKey="id"
                    rowSelection={{
                        type: 'radio',
                        selectedRowKeys: selected,
                        onChange: (keys, records) =>
                            onChangeRow({ keys, records })
                    }}
                />
            </STableContainer>
        </SScrollContainer>
    );
};

ANTDTable.defaultProps = {
    onClickRow: () => { },
    onChangeRow: () => { },
    selected: [],
};

export default ANTDTable;