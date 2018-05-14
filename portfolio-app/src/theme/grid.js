import styled, {css} from 'styled-components';

export const Div = styled.div`
    ${({ marginBottom }) => marginBottom && css`
        margin-Bottom: ${marginBottom};
    `}
`;

export const Container = styled(Div)`
    padding-left: 245px;
    padding-right: 245px;
    padding-top: 50px;
`;

export const Relative = styled(Div)`
    position: relative;
`;

export const Flex = styled(Div)`
    display: flex;
    
    ${({ column }) => column && css`
        flex-direction: column;
    `}

    ${({ justify }) => justify && css`
        justify-content: ${justify};
    `}

    ${({ align }) => align && css`
        align-content: ${align};
    `}
    
`;