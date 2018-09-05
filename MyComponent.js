import React, { Component } from 'react';



class Segundo extends Component {
  render() {
    return (
      <div>
       <h1>{this.props.backgroundColor}Yo soy segundo</h1>
      </div>
    );
  }
}



class Primero extends Component {
  render() {
    return (
      <div>
       <h1>{this.props.backgroundColor}Yo soy primero</h1>
       <Segundo backgroundColor={this.props.backgroundColor}/>
      </div>
    );
  }
}



class MyComponent extends Component {
  render() {
    var myStyle = {
      backgroundColor: this.props.backgroundColor,
    }
    return (
      <div style={myStyle}>
       <Primero backgroundColor={this.props.backgroundColor}/>
      </div>
    );
  }

}


export default MyComponent;
