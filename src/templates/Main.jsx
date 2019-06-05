import React from 'react';
import styled from 'styled-components';
import { Helmet } from "react-helmet";
import Nav from '../components/Nav';
import Header from '../components/Header';
import FlowGrid from '../components/FlowGrid';
import Symbol from '../components/Symbol';
// import ReactGA from 'react-ga';

const OuterWrapper = styled.div`
    width: 100%;
    height: 100%;
    background-color: #125366;
`;

const IconsContainer = styled.div`
    
`;

class Main extends React.Component {
    state = {
        
    }

    render() {
        return (
            <OuterWrapper>
                <Helmet>
                    <title>SF Symbols Reference</title>
                    <meta name="description" content="SF Symbols iOS Icons Reference Documentation" />
                    <meta name="twitter:card" content="summary" />
                    <meta name="twitter:creator" content="@noahsark769" />
                    <meta property="og:title" content="SF Symbols Reference" />
                    <meta property="og:description" content="SF Symbols iOS Icons Reference Documentation" />
                </Helmet>
                <Nav />
                <Header numSymbols={this.props.pageContext.symbols.length.toLocaleString()} />
                <IconsContainer>
                    <FlowGrid columns={10}>
                        {this.props.pageContext.symbols.map(function(symbol) {
                            return (<Symbol symbol={symbol} />);
                        })}
                    </FlowGrid>
                </IconsContainer>
            </OuterWrapper>
        );
    }

    componentDidMount() {
        // ReactGA.initialize('');
        // ReactGA.pageview(window.location.pathname + window.location.search);
    }
};
export default Main;