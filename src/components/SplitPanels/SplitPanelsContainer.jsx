import React, { useEffect, useState } from 'react';
import { SplitPanels } from './SplitPanels';
import {
    array,
    arrayOf,
    number,
    object,
    oneOf,
    oneOfType,
    shape,
    string,
} from 'prop-types';

export const changeFieldsSet = (tabName, changeFields, setChangeFields) => {
    const notLetPadArray = [...changeFields];
    const notLetPadIndex = notLetPadArray.indexOf(tabName);
    notLetPadIndex === -1
        ? notLetPadArray.push(tabName)
        : notLetPadArray.splice(notLetPadIndex, 1);
    setChangeFields(notLetPadArray);
};

const SplitPanelsContainer = ({ changeFields, children, ...other }) => {
    const [notLet, setNotLet] = useState(changeFields || []);

    useEffect(() => {
        setNotLet(changeFields || []);
    }, [changeFields]);

    // eslint-disable-next-line consistent-return
    const childes = React.Children.map(children, (child) => {
        const includeMode = notLet.includes(child.props?.mode);
        if (!includeMode) {
            return child;
        }
    });

    return childes.length !== 1 ? (
        <SplitPanels {...other}>{childes}</SplitPanels>
    ) : (
        childes
    );
};

SplitPanelsContainer.propTypes = {
    changeFields: arrayOf(string),
    // eslint-disable-next-line react/forbid-prop-types
    children: oneOfType([array, object]).isRequired,
    other: shape({
        splitMode: string,
        sizes: arrayOf(number),
        minSize: oneOfType([number, arrayOf(number)]),
        splitDirection: oneOf(['horizontal', 'vertical']),
    }).isRequired,
};

SplitPanelsContainer.defaultProps = {
    changeFields: [],
    // eslint-disable-next-line react/default-props-match-prop-types
    other: {
        sizes: [50, 50],
        minSize: 0,
        splitDirection: 'horizontal',
    },
};

export default SplitPanelsContainer;
