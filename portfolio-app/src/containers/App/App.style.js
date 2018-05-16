import styled from 'styled-components';
import {gray} from '../../theme/variables';
import media from '../../theme/media';

export const Background = styled.div`
    position: fixed;
    left: 10.4vw;
    width: 78vw;
    top: 8.5vh;
    height: 82vh;

    ${media.tablet`
        left: 0;
        width:100vw;
        top: 0;
        height: 100vh;
    `}

    background-image: url(${require('../../assets/panther.png')});
    background-color: ${gray};
    opacity: 0.4;
    background-size: 40%;
    background-repeat: no-repeat;
    background-position: center;
    z-index: -99;
`;