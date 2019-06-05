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
    margin: 40px;

    display: flex;
    flex-wrap: wrap;
    align-items: center;
`;

const SymbolWrapper = styled.div`
    flex: 1 0;
    flex-basis: 17%; // 5 per row
    max-width: 300px;
    overflow-wrap: break-word;
    word-wrap: break-word;
    word-break: break-word;
    text-align: center;

    @media all and (max-width: 900px) {
        flex-basis: 21%; // 4 per row
    }

    @media all and (max-width: 600px) {
        flex-basis: 26%; // 3 per row
    }
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
                        {this.props.pageContext.symbols.map(function(symbol) {
                            return (
                                <SymbolWrapper key={symbol.name}>
                                    <Symbol symbol={symbol} />
                                </SymbolWrapper>
                            );
                        })}
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