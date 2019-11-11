import React from 'react'
import Tool from './Tool'
import Header from './Header'
import Links from './Links'

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
        <div>
          <Header />
          <Links />
        </div>
      );
      
    }
  }
  render() {
    
    return (
        <div>
          {this.displayState()}
          console.log(this.state)
          
        </div>
    );

  }
}

export default Main;
