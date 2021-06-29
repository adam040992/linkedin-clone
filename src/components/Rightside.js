import React from 'react';
import styled from 'styled-components';

function RightSide() {
    return (
        <Container>
            Right side
        </Container>
    )
}

export default RightSide;

const Container = styled.div`
    grid-area: Rightside;
`;
