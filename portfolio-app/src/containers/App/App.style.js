import styled from 'styled-components';
import {lazuli} from '../../theme/variables';

export const Background = styled.div`
    position: fixed;
    left: 13.2vw;
    width: 72.7vw;
    top: 10vh;
    height: 80vh;
    background-image: url(${require('../../assets/koala.png')});
    background-color: ${lazuli};
    opacity: 0.4;
    background-size: 80%;
    background-repeat: no-repeat;
    background-position: center;
    z-index: -99;
`;