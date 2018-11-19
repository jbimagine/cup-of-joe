
import styled from 'styled-components';

// Css for the Nav container
export const NavContainer = styled.div `
    justify-self: ${ props => props.navContainerJustifySelf };
    display: ${ props => props.navContainerDisplay };
    width: ${ props => props.navContainerWidth };
    height: ${ props => props.navContainerHeight };
    background: ${ props => props.navContainerBackgroundColor };

`;

// Css for the Navbar
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

// Css for the NavLogo
export const NavLogo = styled.img `
    width: ${ props => props.navLogoWidth };
    margin-right: ${ props => props.navLogoMarginRight };
`;

// Css for the Nav Logo and Title Container
export const NavLogoTitleContainer = styled.div `
    display: ${ props => props.navLogoTitleContainerDisplay };
    justify-content: ${ props => props.navLogoTitleContainerJustifyContent?props.navLogoTitleContainerJustifyContent:'flex-start'  };
    align-items: ${ props => props.navLogoTitleContainerAlignItems };
    margin: ${ props => props.navLogoTitleContainerMargin };
    height: ${ props => props.navLogoTitleContainerHeight };
`;

// Css for the Nav Title
export const NavTitle = styled.div `
    font-size: ${ props => props.navTitleFontSize };
    font-weight: ${ props => props.navTitleFontWeight };
`;

// Css for the Nav Menu Container
export const NavMenuContainer = styled.div `
    display: ${ props => props.navMenuContainerDisplay };
    grid-template-columns: ${ props => props.navMenuContainerGridTemplateColumns };
    grid-column-end: ${ props => props.navMenuContainerGridColumnEnd };
    font-size: ${ props => props.navMenuFontSize };
`;

// Css for the NavMenu
export const NavMenu = styled.div `
    display: ${ props => props.navMenuDislplay };
    cursor:pointer;
    justify-content: ${ props => props.navMenuJustifyContent?props.navMenuJustifyContent:'flex-start'  };
    align-items: ${ props => props.navMenuAlignItems };
    padding-right: ${ props => props.navMenuPaddingRight };
    &:last-of-type {
        padding-right: ${ props => props.navMenuLastPaddingRight }
    }
`;

