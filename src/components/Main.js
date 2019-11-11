import React from 'react'
import Tool from './Tool'
import Header from './Header'
import '/Users/james/Desktop/hello-world/src/CSS/Main.css'

class Main extends React.Component {

  constructor(props) {
    super(props);
    
    this.state = {
      display: 'Tool'
    }
  }

  getInitialState() {
    return {
      display: 'Tool'
    }
  }

  handleClick() {
      var display = this.state.display
      var newActive = display === 'Tool' ? 'Help' : 'Tool'
      this.setState({
          display: newActive
    });
  }

  displayState(){
    var display = this.state.display

    if(display === 'Tool'){
      return(
        <div className="Main-tool-view">
          <Header className="Main-header" />
          <Tool className="Main-tool" />
        </div>
      );
      
    }
  }
  render() {
    
    return (
        <div>
          {this.displayState()}
        </div>
    );

  }
}

export default Main;
