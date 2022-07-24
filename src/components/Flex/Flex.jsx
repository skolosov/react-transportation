import React, { forwardRef } from 'react';
import styled, { css } from 'styled-components';
import {
    arrayOf,
    bool,
    func,
    number,
    node,
    oneOf,
    oneOfType,
} from 'prop-types';

export const shouldForwardPropHandler = (props, forward = false) => (prop) =>
    props.includes(prop) === forward;

const SFlex = styled.div.withConfig({
    shouldForwardProp: shouldForwardPropHandler([
        'inline',
        'direction',
        'alignItems',
        'justify',
        'wrap',
    ]),
})`
    display: ${({ inline }) => (!inline ? 'flex' : 'inline-flex')};
    ${({ direction }) =>
        direction &&
        css`
            flex-direction: ${direction};
        `};
    ${({ alignItems }) =>
        alignItems &&
        css`
            align-items: ${alignItems};
        `};
    ${({ justify }) =>
        justify &&
        css`
            justify-content: ${justify};
        `};
    ${({ wrap }) =>
        wrap &&
        css`
            flex-wrap: ${wrap};
        `};
    ${({ grow }) =>
        grow &&
        css`
            flex-grow: ${grow};
        `};
`;

const Flex = forwardRef(({ children, ...otherProps }, ref) => (
    <SFlex ref={ref} {...otherProps}>
        {children}
    </SFlex>
));

export const FlexProps = {
    direction: oneOf(['row', 'column']),
    alignItems: oneOf(['center', 'flex-end', 'flex-start', 'stretch']),
    justify: oneOf([
        'center',
        'space-between',
        'space-around',
        'flex-end',
        'flex-start',
    ]),
    wrap: oneOf(['wrap', 'nowrap']),
    grow: number,
    children: oneOfType([arrayOf(node), node]),
    onClick: func,
    inline: bool,
};
Flex.propTypes = FlexProps;

export default Flex;
