/* 
This is a React App of my Personal Website Cup of Joe
It has been made very modular so that all aspects 
are easily  editable and changed
*/

import React, { Component } from 'react';
import './App.css';
import Navigation from './components/Navigation';
import CoffeeMugSVG01 from './imgs/coffee_mug_icon_01.svg';
import styled from 'styled-components';

// Set the default font for the entire app
const AppContainer = styled.div `
  font-family: 'Quicksand', sans-serif;
`

class App extends Component {
  constructor(props){
    super(props);
    
    this.state = {
      /* here we set our titles for menu items */
      getMenuItems: [
        { label: 'Home' },
        { label: 'About' },
        { label:'Contact' },
      ],
      
    }

    this.navbarPadding = 32; /* use this value to set the padding on the left and right edges of a container */
  }

  
  render() {
    return (
      <AppContainer className="App">
       <Navigation
       
        title = 'Cup of Joe' /* this is where we keep the title of the page */
        logo = { CoffeeMugSVG01 }
        logoAltText = 'coffee mug'
        
        // Navigation Menu Items
        navMenuItems = { this.state.getMenuItems } /* passes this value to the child to set the menu name */
        
        // Navbar Styles
        navbarColor = 'white' /* set the color of the navbar text */
        navbarDisplay = 'grid' /* set the display */
        navbarAlignItems = 'center' /* align the items */
        navbarGridTemplateColumns = 'repeat(3,1fr)' /* set the number of columns */
        navbarJustifySelf = 'center' /* justify-self */
        navbarWidth =  { `calc(100vw - ${this.navbarPadding}px)` } /* set the width of the container */
        
        // Nav Container Styles
        navContainerJustifySelf = 'center' /* justify self using display grid */
        navContainerDisplay = 'grid' /* set the display */
        navContainerWidth = '100vw' /*  set the width of the container  */
        navContainerHeight = '60px' /* set the height of the container */
        navContainerBackgroundColor = 'black' /* set the background color */

        //  Nav Logo and Title Container Styles
        navLogoTitleContainerDisplay = 'flex' /* set the display */
        navLogoTitleContainerJustifyContent = 'flex-start' /* justify the content */
        navLogoTitleContainerAlignItems = 'center' /* align the items */
        navLogoTitleContainerHeight = '60px'

        // Nav Logo Styles
        navLogoWidth = '48px'
        navLogoMarginRight = '12px'

        // Nav Title Styles
        navTitleFontSize = '24px'
        navTitleFontWeight = '500'

        // Nav Menu Container Styles
        navMenuContainerDisplay = 'grid' /* set the display */
        navMenuContainerGridTemplateColumns = '1fr 1fr 1fr' /* set the number of columns-will update so that the values are not hard coded */
        navMenuContainerGridColumnEnd = '4' /* set the grid-column-end */

        // Nav Menu Styles
        navMenuDislplay = 'flex' /* set the display */
        navMenuJustifyContent = 'flex-end' /* justiyf the content */
        navMenuPaddingRight = '16px' /* set the padding right */
        navMenuLastPaddingRight = '0' /* set the last item's padding right */
        navMenuAlignItems = 'center'
        navMenuFontSize ='12px'
       />
      </AppContainer>
    );
  }
}

export default App;
