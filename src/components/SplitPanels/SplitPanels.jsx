import React, {
    createRef,
    memo,
    useCallback,
    useRef,
} from 'react';
import Flex from '../Flex/Flex';
import { SSplit } from './SplitPanels.styled';
import { isEqual } from 'lodash';
import {
    SplitPanelsProvider,
} from './SplitPanelsContext';
import {
    array,
    arrayOf,
    number,
    object,
    oneOf,
    oneOfType,
    string,
} from 'prop-types';

const getSizeSplit = (
    splitMode,
    splitDirection,
) => {
    const localSizes = localStorage.getItem(
        `split_${splitMode}_${splitDirection}_sizes`
    );
    return localSizes?.split(',').map((el) => +el);
};

const setSizeSplit = (splitMode, splitDirection, value) => {
    localStorage.setItem(`split_${splitMode}_${splitDirection}_sizes`, value);
};

export const SplitPanels = memo(
    ({ splitMode, sizes, minSize, splitDirection, children, ...other }) => {

        const gutterRef = useRef();
        const startSize = getSizeSplit(
            splitMode,
            splitDirection,
        );
        const size = startSize || sizes;

        let factSize = size;

        let isDirectionCollapse = factSize[0] > factSize[1];

        const gutterMount = (_, direction) => {
            const gutter = document.createElement('div');
            gutter.className = `gutter gutter-${direction}`;
            const collapse = factSize.some((el) => el < 1);
            collapse && gutter.classList.add('collapse');
            gutterRef.current = gutter;
            return gutter;
        };

        const onDrugStart = () => {
            gutterRef.current?.classList.remove('collapse');
        };

        const onDragEnd = (...end) => {
            const [resSize] = end;
            const sinfulness = 100 - resSize.reduce((el, sum) => el + sum);
            const saveSize = resSize.map((el, key) =>
                key === 0 ? el - sinfulness : el
            );
            factSize = saveSize;
            setSizeSplit(splitMode, splitDirection, saveSize);
            const collapse = factSize.some((el) => el < 1);
            collapse && gutterRef.current?.classList.add('collapse');
            isDirectionCollapse = factSize[0] > factSize[1];
        };

        const getChildClone = useCallback(
            (child, childRef) => {
                return (
                    <>
                        {React.cloneElement(child, {
                            ...other,
                        })}
                    </>
                );
            },
            [children]
        );

        return (
            <SplitPanelsProvider
                value={{}}
            >
                <SSplit
                    guttder={isDirectionCollapse ? 1 : 0}
                    sizes={size}
                    minSize={minSize}
                    gutterSize={2}
                    gutterAlign="center"
                    snapOffset={30}
                    dragInterval={1}
                    direction={splitDirection}
                    gutter={gutterMount}
                    onDragEnd={onDragEnd}
                    onDragStart={onDrugStart}
                >
                    {React.Children.map(children, (child) => {
                        const childRef = createRef();
                        return (
                            <Flex className="split" ref={childRef}>
                                {getChildClone(child, childRef)}
                            </Flex>
                        );
                    })}
                </SSplit>
            </SplitPanelsProvider>
        );
    },
    isEqual
);

SplitPanels.propTypes = {
    splitMode: string.isRequired,
    sizes: arrayOf(number).isRequired,
    minSize: oneOfType([number, array]),
    splitDirection: oneOf(['horizontal', 'vertical']).isRequired,
    // eslint-disable-next-line react/forbid-prop-types
    children: array.isRequired,
    // eslint-disable-next-line react/forbid-prop-types
    other: object, // custom developer props
};

SplitPanels.defaultProps = {
    minSize: 0,
    other: {},
};
