import styled from 'styled-components';
import Split from 'react-split';

const gutterCollapseWidth = '12px';
const gutterSeparatorWidth = '20%';

export const SSplit = styled(Split)`
    position: relative;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    display: flex;
    flex-direction: ${({ direction }) =>
        direction === 'horizontal' ? 'row' : 'column'};
    height: 100%;
    width: 100%;
    flex-grow: 1;

    .split {
        background-color: white;
        z-index: 1;
        width: 100%;
    }

    .expand {
        position: absolute;
        width: 100% !important;
        height: 100% !important;
        z-index: 2;
    }

    .gutter {
        background-color: gray !important;
        z-index: 2;
        opacity: 1;
    }

    .gutter.gutter-horizontal {
        cursor: col-resize;
        position: relative;
        box-sizing: border-box;
        &:after {
            content: '';
            right: 50%;
            transform: translateX(50%);
            -webkit-transition: background-color 1s ease;
            transition: background-color 1s ease;
            height: 100%;
            position: absolute;
            width: 10px;
        }
        &:hover:after {
            background-color: rgba(0, 0, 0, 0.1);
        }
    }
    .collapse.gutter.gutter-horizontal {
        &:after {
            content: '';
            right: 50%;
            transform: translateX(
                ${({ guttder }) =>
        guttder
            ? `calc(50% - ${gutterCollapseWidth} / 2)`
            : `calc(50% + ${gutterCollapseWidth} / 2)`}
            );
            -webkit-transition: background-color 1s ease;
            transition: background-color 1s ease;
            height: 100%;
            position: absolute;
            width: ${gutterCollapseWidth} !important;
            border-left: 2px solid gray !important;
            border-right: 2px solid gray !important;
            background-color: white !important;
            box-sizing: border-box;
        }
        &:before {
            content: '';
            position: absolute;
            width: 2px;
            height: ${gutterSeparatorWidth};
            border: 1px solid gray;
            right: 50%;
            top: calc((100% - ${gutterSeparatorWidth}) / 2);
            transform: translateX(
                ${({ guttder }) =>
        guttder
            ? `calc(50% - ${gutterCollapseWidth} / 2)`
            : `calc(50% + ${gutterCollapseWidth} / 2)`}
            );
            box-sizing: border-box;
            z-index: 4;
        }
    }

    .gutter.gutter-vertical {
        cursor: row-resize;
        position: relative;
        box-sizing: border-box;
        &:after {
            content: '';
            bottom: 50%;
            transform: translateY(50%);
            -webkit-transition: background-color 1s ease;
            transition: background-color 1s ease;
            width: 100%;
            position: absolute;
            height: 10px;
        }
        &:hover:after {
            background-color: rgba(0, 0, 0, 0.1);
        }
    }
    .collapse.gutter.gutter-vertical {
        &:after {
            content: '';
            bottom: 50%;
            transform: translateY(
                ${({ guttder }) =>
        guttder
            ? `calc(50% - ${gutterCollapseWidth} / 2)`
            : `calc(50% + ${gutterCollapseWidth} / 2)`}
            );
            -webkit-transition: background-color 1s ease;
            transition: background-color 1s ease;
            width: 100%;
            position: absolute;
            height: ${gutterCollapseWidth} !important;
            border-top: 2px solid gray !important;
            border-bottom: 2px solid gray !important;
            background-color: white !important;
            box-sizing: border-box;
        }
        &:before {
            content: '';
            position: absolute;
            height: 2px;
            width: ${gutterSeparatorWidth};
            border: 1px solid gray;
            bottom: 50%;
            left: calc((100% - ${gutterSeparatorWidth}) / 2);
            transform: translateY(
                ${({ guttder }) =>
        guttder
            ? `calc(50% - ${gutterCollapseWidth} / 2)`
            : `calc(50% + ${gutterCollapseWidth} / 2)`}
            );
            box-sizing: border-box;
            z-index: 4;
        }
    }
`;
