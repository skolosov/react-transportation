import { Select } from 'antd';
import React from 'react';
const { Option } = Select;

export const SelectList = ({ options, onChange, selected }) => {
    return (
        <Select
            style={{
                width: 180,
            }}
            onChange={onChange}
            defaultValue={selected}
        >
            {options.map(({ id, name }) =>
                <Option value={id} key={id}>{name}</Option>
            )}
        </Select>
    );
};

SelectList.defaultProps = {
    selected: null
};