import React from 'react';
import styled from 'styled-components';
import { Navbar, Navtitle, NavMenu, NavContainer } from '../styled-components/Navigation_Styles';

class Navigation extends React.Component {
  
    render(){


        return(
            <>
             <NavContainer
                navContainerDisplay = { this.props.navContainerDisplay }
                navContainerWidth = { this.props.navContainerWidth }
                navContainerHeight = { this.props.navContainerHeight }
                navContainerBackgroundColor = { this.props.navContainerBackgroundColor }
             >
                <Navbar 
                        navHeight = { this.props.navHeight }  
                        navBarWidth = { this.props.navBarWidth }
                        navBackgroundColor = { this.props.navBackgroundColor } 
                        navColor = { this.props.navColor } 
                        navDisplay = { this.props.navDisplay }
                        navAlignItems = { this.props.navAlignItems }
                        navGridTemplateColumns = { this.props.navGridTemplateColumns }
                        navJustifyContent = { this.props.navJustifyContent }      
                        navbarJustifySelf = { this.props.navbarJustifySelf }
                        navContainerJustifySelf = { this.props.navbarJustifySelf }
             >
                        <Navtitle 
                        navTitleDisplay = { this.props.navTitleDisplay }
                        navTitleJustifyContent = { this.props.navTitleJustifyContent }
                        > 
                        {this.props.title} </Navtitle>
                        <NavMenu
                        navMenuDislplay = { this.props.navMenuDislplay }
                        navMenuJustifyContent = { this.props.navMenuJustifyContent }
                        > Container will be list of items </NavMenu>
                    </Navbar>
             </NavContainer>
            </>
        )
    }
};

export default Navigation;