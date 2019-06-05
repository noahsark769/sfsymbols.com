import React from 'react';
import styled from 'styled-components';
import Image from './Image';

const Container = styled.div`
    flex-direction: row;
    margin: 20px;
`;

const ImageWrapper = styled.div`
    width: 50px;
    height: 50px;
`;

const Symbol = (props) => {
    console.log(props.symbol);
    return (
        <Container>
            <ImageWrapper><Image filename={props.symbol.lightBasePath} alt={props.symbol.name}/></ImageWrapper>
            <p>{props.symbol.name}</p>
        </Container>
    );
};
export default Symbol;