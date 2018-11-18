import React, { Component } from 'react';
import './App.css';
import Navigation from './components/Navigation';

class App extends Component {
  render() {
    return (
      <div className="App">
       <Navigation
       // Navbar Styles
       title = 'Cup of Joe'
       navColor = 'white'
       navDisplay = 'grid'
       navAlignItems = 'center'
       navGridTemplateColumns = '1fr 1fr'
       navJustifyContent = 'space-between'
       navMargin = '0 16px'
       navbarJustifySelf = 'center'
       navBarWidth = '99vw'
       // Nav Container Styles
       navContainerJustifySelf = 'center'
       navContainerDisplay = 'grid'
       navContainerWidth = '100vw'
       navContainerHeight = '60px'
       navContainerBackgroundColor = 'black'
      //  Nav Title Styles
       navTitleDisplay = 'flex'
       navTitleJustifyContent = 'flex-start'

       // Nav Menu Styles
       navMenuDislplay = 'flex'
       navMenuJustifyContent = 'flex-end'
       />
      </div>
    );
  }
}

export default App;
