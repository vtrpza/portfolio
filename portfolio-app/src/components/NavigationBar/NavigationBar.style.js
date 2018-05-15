import styled from 'styled-components';
import { Flex } from '../../theme/grid';
import {orange, pale} from '../../theme/variables';
import {Link} from 'react-router';

export const NavigationContainer = styled(Flex)`
    position: fixed;
    right: 2em;
    top: 1.8em;
`;

export const NavItem = styled(Link)`
    margin-right: 30px;
    font-size: 1.5em;
    cursor: pointer;
    color: ${orange};
    text-decoration: none;
    
    &:hover {
        color: ${pale};
    }
`;