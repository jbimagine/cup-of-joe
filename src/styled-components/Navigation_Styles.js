
import styled from 'styled-components';


export const NavContainer = styled.div `
    justify-self: ${ props => props.navContainerJustifySelf };
    display: ${ props => props.navContainerDisplay };
    width: ${ props => props.navContainerWidth };
    height: ${ props => props.navContainerHeight };
    background: ${ props => props.navContainerBackgroundColor };

`;

export const Navbar = styled.nav`
	width: ${ props => props.navbarWidth };
    height: ${ props => props.navbarHeight };
    background: ${ props => props.navbarBackgroundColor } ;
    color: ${ props => props.navbarColor };
    display: ${ props => props.navbarDisplay };
    align-items: ${ props => props.navbarAlignItems };
    grid-template-columns: ${ props => props.navbarGridTemplateColumns };
    justify-content: ${ props => props.navbarJustifyContent };
    padding: ${ props => props.navbarPadding };
    margin: ${ props => props.navbarMargin };
    justify-self: ${ props => props.navbarJustifySelf };
`;

export const Navtitle = styled.div `
    display: ${ props => props.navTitleDisplay };
    justify-content: ${ props => props.navTitleJustifyContent?props.navTitleJustifyContent:'flex-start'  };
    margin: ${ props => props.navTitleMargin };
`;

export const NavMenuContainer = styled.div `
    display: ${ props => props.navMenuContainerDisplay };
    grid-template-columns: ${ props => props.navMenuContainerGridTemplateColumns };
    grid-column-end: ${ props => props.navMenuContainerGridColumnEnd };
`;

export const NavMenu = styled.div `
    display: ${ props => props.navMenuDislplay };
    cursor:pointer;
    justify-content: ${ props => props.navMenuJustifyContent?props.navMenuJustifyContent:'flex-start'  };
    padding-right: ${ props => props.navMenuPaddingRight };
    &:last-of-type {
        padding-right: ${ props => props.navMenuLastPaddingRight }
    }
`;

