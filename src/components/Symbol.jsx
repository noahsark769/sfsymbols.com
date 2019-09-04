import React from 'react';
import styled from 'styled-components';
import { IoMdCopy } from "react-icons/io";

// https://stackoverflow.com/questions/985272/selecting-text-in-an-element-akin-to-highlighting-with-your-mouse
function selectElementText(el, win) {
    win = win || window;
    var doc = win.document, sel, range;
    if (win.getSelection && doc.createRange) {
        sel = win.getSelection();
        range = doc.createRange();
        range.selectNodeContents(el);
        sel.removeAllRanges();
        sel.addRange(range);
    } else if (doc.body.createTextRange) {
        range = doc.body.createTextRange();
        range.moveToElementText(el);
        range.select();
    }
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px;
    position: relative;

    &:hover .copy {
        display: block;
    }
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

const CopyContainer = styled.div`
    position: absolute;
    top: 0;
    right: 10px;
    cursor: pointer;
    display: none;
`;

class Symbol extends React.Component {
    handleCopyClick() {
        console.log(this.nameElement);
        selectElementText(this.nameElement, window);
        document.execCommand('copy');
        console.log(this.props.symbol.name);
    }

    render() {
        return (
            <Container>
                <NameWrapper ref={(element) => this.nameElement = element}>{this.props.symbol.name}</NameWrapper>
                {this.props.symbol.restriction && <Restriction><a href="https://developer.apple.com/design/human-interface-guidelines/sf-symbols/overview/#symbols-for-use-as-is">Usage restricted to {this.props.symbol.restriction}</a></Restriction>}
                <CopyContainer className="copy" onClick={this.handleCopyClick.bind(this)}><IoMdCopy size="20" color="white" /></CopyContainer>
            </Container>
        );
    }
};
export default Symbol;