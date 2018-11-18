
import styled from 'styled-components';


export const NavContainer = styled.div `
    justify-self: ${ props => props.navContainerJustifySelf };
    display: ${ props => props.navContainerDisplay };
    width: ${ props => props.navContainerWidth };
    height: ${ props => props.navContainerHeight };
    background: ${ props => props.navContainerBackgroundColor };

`;

export const Navbar = styled.div`
	width: ${ props => props.navBarWidth };
    height: ${ props => props.navHeight };
    background: ${ props => props.navBackgroundColor } ;
    color: ${ props => props.navColor };
    display: ${ props => props.navDisplay };
    align-items: ${ props => props.navAlignItems };
    grid-template-columns: ${ props => props.navGridTemplateColumns };
    justify-content: ${ props => props.navJustifyContent };
    padding: ${ props => props.navPadding };
    margin: ${ props => props.navMargin };
    justify-self: ${ props => props.navbarJustifySelf };
`;

export const Navtitle = styled.div `
    display: ${ props => props.navTitleDisplay };
    justify-content: ${ props => props.navTitleJustifyContent?props.navTitleJustifyContent:'flex-start'  };
`;

export const NavMenu = styled.div `
    display: ${ props => props.navMenuDislplay };
    justify-content: ${ props => props.navMenuJustifyContent?props.navMenuJustifyContent:'flex-start'  };
`;

