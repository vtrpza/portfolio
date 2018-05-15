import styled from 'styled-components';
import {gray} from '../../theme/variables';

export const Background = styled.div`
    position: fixed;
    left: 6.7vw;
    width: 85.7vw;
    top: 8vh;
    height: 100vh;
    background-image: url(${require('../../assets/panther.png')});
    background-color: ${gray};
    opacity: 0.4;
    background-size: 40%;
    background-repeat: no-repeat;
    background-position: center;
    z-index: -99;
`;