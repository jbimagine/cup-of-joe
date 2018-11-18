import React from 'react';
import { Navbar, Navtitle, NavMenu, NavMenuContainer, NavContainer } from '../styled-components/Navigation_Styles';

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
                <Navtitle 
                    navTitleDisplay = { this.props.navTitleDisplay }
                    navTitleJustifyContent = { this.props.navTitleJustifyContent }
                    > 
                    {this.props.title} 
                </Navtitle>
                <NavMenuContainer
                navMenuContainerDisplay = { this.props.navMenuContainerDisplay }
                navMenuContainerGridTemplateColumns = { this.props.navMenuContainerGridTemplateColumns }
                navMenuContainerGridColumnEnd = { this.props.navMenuContainerGridColumnEnd }
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