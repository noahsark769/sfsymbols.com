import React from "react"
import styled from 'styled-components';

const OuterWrapper = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #125366;
`;

const Container = styled.div`
    max-width: 600px;
    margin: 0 auto;
    padding: 100px 40px 40px 40px;
`;

const Heading = styled.h1`
    color: white;
    font-size: 42px;
    font-weight: bold;
    text-align: center;
`;

const Subheading = styled.div`
    color: white;
    font-size: 16px;
    line-height: 20px;
    margin-top: 30px;
    text-align: center;

    a, a:hover, a:visited {
        color: inherit;
        text-decoration: underline;
    }
`;

const NotFoundPage = () => (
  <OuterWrapper>
    <Container>
        <Heading>404: Page not found</Heading>
        <Subheading>That's a real xmark.octagon.fill</Subheading>
    </Container>
  </OuterWrapper>
)

export default NotFoundPage
