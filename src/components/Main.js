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

  render() {
    
    return (
        <div className="Main-tool-view">
          <Header className="Main-header" />
          <Tool className="Main-tool" />
        </div>
    );

  }
}

export default Main;
