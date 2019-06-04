import React from 'react';
import styled from 'styled-components';
import { IoLogoGithub, IoLogoTwitter } from "react-icons/io";

const StyledNav = styled.nav`
    width: 100%;
    display: flex;
    flex-direction: horizontal;
`;

const Other = styled.div`
    flex: 10;

    display: flex;
    flex-direction: horizontal;
    justify-content: flex-end;
    align-items: center;
`;

const NavLink = styled.a`
    color: white;
    cursor: pointer;
    font-weight: bold;

    &:hover {
        text-decoration: underline;
    }
`;

const Nav = (props) => {
    return (
        <StyledNav className="padding--md">
            <Other>
                <NavLink className="margin-right--md" href="https://twitter.com/noahsark769"><IoLogoTwitter size="24" /></NavLink>
                <NavLink className="margin-right--md" href="https://github.com/noahsark769/sfsymbols.com"><IoLogoGithub size="24" /></NavLink>
            </Other>
        </StyledNav>
    )
};
export default Nav;