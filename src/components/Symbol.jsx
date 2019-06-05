import React from 'react';
import styled from 'styled-components';
import Image from './Image';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px;
`;

const ImageWrapper = styled.div`
    width: 50px;
    height: 50px;
`;

const NameWrapper = styled.p`
    color: white;
    margin-top: 10px;
`;

const Restriction = styled.div`
    background-color: #eb6365;
    padding: 5px;
    color: white;
    margin-top: 5px;
    font-size: 10px;
    border-radius: 3px;

    a, a:hover, a:visited {
        color: inherit;
        text-decoration: underline;
    }
`;

const Symbol = (props) => {
    return (
        <Container>
            <ImageWrapper>
                <Image filename={props.symbol.lightBasePath} alt={props.symbol.name} width={50}/>
            </ImageWrapper>
            <NameWrapper>{props.symbol.name}</NameWrapper>
            {props.symbol.restriction && <Restriction><a href="https://developer.apple.com/design/human-interface-guidelines/sf-symbols/overview/#symbols-for-use-as-is">Usage restricted to {props.symbol.restriction}</a></Restriction>}
        </Container>
    );
};
export default Symbol;