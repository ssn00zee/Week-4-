import styled from 'styled-components';

export const FlexCont = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.color || 'inherit'};
    padding: 0.5em;
`

export const Wrapper = styled(FlexCont)`
    display: flex; 
    width: 100vw;
    height: 100vh;
    background: #FFFDFA;
`;