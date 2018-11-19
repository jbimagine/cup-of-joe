import React from 'react';
import { Navbar, NavTitle, NavLogoTitleContainer, NavMenu, NavLogo, NavMenuContainer, NavContainer } from '../styled-components/Navigation_Styles';

class Navigation extends React.Component {
  
    render(){

        const menuItems = this.props.navMenuItems.map( ( menuItem, index ) => (
            <NavMenu key = {` ${menuItem.label}-${index}` }
            navMenuDislplay = { this.props.navMenuDislplay }
            navMenuJustifyContent = { this.props.navMenuJustifyContent }
            navMenuPaddingRight = { this.props.navMenuPaddingRight }
            navMenuLastPaddingRight = { this.props.navMenuLastPaddingRight }
            >
                { menuItem.label }
            </NavMenu>
            ));


        return(
            <>
             <NavContainer
                navContainerDisplay = { this.props.navContainerDisplay }
                navContainerWidth = { this.props.navContainerWidth }
                navContainerHeight = { this.props.navContainerHeight }
                navContainerBackgroundColor = { this.props.navContainerBackgroundColor }
             >
                <Navbar 
                    navbarHeight = { this.props.navbarHeight }  
                    navbarWidth = { this.props.navbarWidth }
                    navbarColor = { this.props.navbarColor } 
                    navbarMargin = { this.props.navbarMargin }
                    navbarDisplay = { this.props.navbarDisplay }
                    navbarAlignItems = { this.props.navbarAlignItems }
                    navbarBackgroundColor = { this.props.navbarBackgroundColor }
                    navbarGridTemplateColumns = { this.props.navbarGridTemplateColumns }
                    navbarJustifySelf = { this.props.navbarJustifySelf }
             >
                <NavLogoTitleContainer 
                    navLogoTitleContainerHeight = { this.props.navLogoTitleContainerHeight }
                    navLogoTitleContainerDisplay = { this.props.navLogoTitleContainerDisplay }
                    navLogoTitleContainerJustifyContent = { this.props.navLogoTitleContainerJustifyContent }
                    navLogoTitleContainerAlignItems = { this.props.navLogoTitleContainerAlignItems }
                    > 
                    <div><NavLogo  
                   navLogoWidth = { this.props.navLogoWidth } 
                   navLogoMarginRight = { this.props.navLogoMarginRight }
                   src = { this.props.logo} 
                   alt = { this.props.logoAltText }
                   /></div>
                   <div>
                        <NavTitle
                        navTitleFontSize = { this.props.navTitleFontSize }
                        navTitleFontWeight = { this.props.navTitleFontWeight }
                        >{this.props.title}</NavTitle>
                   </div>
                </NavLogoTitleContainer>
                <NavMenuContainer
                    navMenuContainerDisplay = { this.props.navMenuContainerDisplay }
                    navMenuContainerGridTemplateColumns = { this.props.navMenuContainerGridTemplateColumns }
                    navMenuContainerGridColumnEnd = { this.props.navMenuContainerGridColumnEnd }
                    navMenuAlignItems = { this.props.navMenuAlignItems }
                    navMenuFontSize = { this.props.navMenuFontSize }
                >
                    { menuItems }               
                </NavMenuContainer>
                </Navbar>
             </NavContainer>
            </>
        )
    }
};

export default Navigation;