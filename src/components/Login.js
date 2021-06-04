import React from 'react';
import styled from 'styled-components';

function Login() {
    return (
        <Container>
            <Nav>
                <a href="/">
                    <img src="/images/login-logo.svg" alt="Login Logo" />
                </a>
            </Nav>
        </Container>
    )
}

export default Login

const Container = styled.div``;

const Nav = styled.div``;