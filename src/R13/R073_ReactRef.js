import React, { Component } from 'react';

class R073_ReactRef extends Component {
  constructor(props) {
    super(props);
    this.InputRef = React.createRef();
  }

  RefFocus = (e) => {
    this.InputRef.current.focus();
    console.log(this.InputRef.current.value)
  }

  JavascriptFocus() {
    document.getElementById('id').focus();
  }

  render() {
    return (
      <>
        <input id="id" type="text" ref={this.InputRef} />
        <input type="button" value="Javascript Focus" onClick={this.JavascriptFocus}/>
        
        <input id="id1" type="text" ref={this.InputRef} />
        <input type="button" value="Ref Focus" onClick={this.RefFocus}/>
        
      </>  
    )
  }
}

export default R073_ReactRef;