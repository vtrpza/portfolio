import styled from 'styled-components';
import {
    pale
} from '../../theme/variables';
import media from '../../theme/media';

export const ImageButton = styled.div`
    cursor: pointer;
    overflow: hidden;
    display: inline-block;

    & > img {
        transition: transform .3s;
    }
    
    &:hover {
        & > img {
            transform: scale(1.3);
        }
    }
`;

export const Index = styled.div`
    position: absolute;
    left: 0;
    bottom: 0;
    z-index: -1;
    
    h1 {
        font-size: 5em;
        margin: 0;
        font-weight: bold;
        color: ${pale};
        opacity: 0.5;
        transform: translateY(18%);

    }
`;

export const H1 = styled.h1`
    ${media.tablet`
        font-size: 1.5em;
    `}
`

export const Title = styled.h1`
    color: ${pale};
    margin-top: 0;
    
`;