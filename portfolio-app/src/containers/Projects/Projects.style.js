import styled from 'styled-components';
import { dark_liver } from '../../theme/variables';

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
        color: ${dark_liver};
        opacity: 0.5;
        transform: translateY(18%);
    }
`;