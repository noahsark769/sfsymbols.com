import React from 'react';
import styled from 'styled-components';

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

const Header = (props) => {
    return (
        <Container>
            <Heading>{props.numSymbols} SF Symbols</Heading>
            <Subheading>SF Symbols is the system icon framework in iOS 13+. This site lists all the available icons and their names.</Subheading>
            <Subheading>This site will always be <a href="https://github.com/noahsark769/sfsymbols.com">open source</a> and ad-free. If you'd like to support this project and others like it, please download <a href="https://itunes.apple.com/us/app/cifilter-io/id1457458557?mt=8">CIFilter.io</a>.</Subheading>
        </Container>
    );
};
export default Header;