import styled from 'styled-components';
import {
    harvard_crimson,
    smoky_black
} from './variables'

export const A = styled.a`
    color: ${harvard_crimson};
    text-decoration: none;
    position: relative;

    &:after {
        content: ' ';
        position: absolute;
        left: 0;
        bottom: 0;
        height: 10%;
        width: 100%;
        background-color: ${harvard_crimson};
        z-index: -1;
        transition: height .1s, background-color .1s;
    }

    &:hover:after {
        height: 40%;
        background-color: ${smoky_black};
    }
`;