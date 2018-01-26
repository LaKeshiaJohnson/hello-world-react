import React, { Component } from 'react'; //import statement
import './HelloWorld.css'; //importing css specific to this file

//component
class HelloWorld extends Component {
  render() {
    return (
      <div className="helloContainer">
        <h1>Hello, world!</h1>
      </div>
    );
  }
}
 
export default HelloWorld;
//tagging the HelloWorld component for exporting so that it can be imported by another module