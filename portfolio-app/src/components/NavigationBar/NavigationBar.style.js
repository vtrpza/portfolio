import styled from 'styled-components';
import { Flex } from '../../theme/grid';
import {orange, pale, black} from '../../theme/variables';
import {Link} from 'react-router';
import media from '../../theme/media';

export const NavigationContainer = styled(Flex)`
    position: fixed;
    right: 2em;
    top: 0.7em;
    ${media.tablet`
        z-index: 1;
        font-size: 0.5em;
        right: 0;
        left: 0;
        justify-content: center;
        top: 0;
        padding: 15px 0;
        background-color: ${black};
    `}
`;

export const NavItem = styled(Link)`
    margin-right: 15px;
    margin-left: 15px;
    font-size: 1.5em;
    cursor: pointer;
    color: ${orange};
    text-decoration: none;
    
    &:hover {
        color: ${pale};
    }
`;