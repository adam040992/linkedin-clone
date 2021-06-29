import React from 'react';
import styled from 'styled-components';

function LeftSide() {
    return (
        <Container>
            Left Side 
        </Container>
    )
}

export default LeftSide;

const Container = styled.div`
    grid-area: Leftside;
`;
