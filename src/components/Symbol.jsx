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

const Symbol = (props) => {
    return (
        <Container>
            <ImageWrapper>
                <Image filename={props.symbol.lightBasePath} alt={props.symbol.name} width={50}/>
            </ImageWrapper>
            <NameWrapper>{props.symbol.name}</NameWrapper>
        </Container>
    );
};
export default Symbol;