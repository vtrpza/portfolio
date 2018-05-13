import styled, { css } from 'styled-components';


export const MainImage = styled.div`
    height: 100vh;
    background-image: url('${require('../../assets/panda.jpg')}');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;

    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;

    text-align: center;
    color: white;

    font-size: 2em;

    h1 {
        margin-bottom: 0;
    }
`;

export const RevealP = styled.p`
    position: relative;
    &:after {
        content: ' ';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: #000000 ;

        transform-origin:left;
        transform: rotateY(90deg);

        transition: transform 1s;
    }

    ${({hide}) => hide && css`
        &:after {
            transform: rotateY(0deg);
        }
    `}
`;