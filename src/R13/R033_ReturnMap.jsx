import React, { Component } from "react";

class R033_ReturnMap extends Component {
  render() {
    const element_Array = [
      <li key="0">react</li>,
      <li key="1">200</li>,
      <li key="2">Array map</li>,
    ];

    return <ul>{element_Array.map((array_val) => array_val)}</ul>;
  }
}

export default R033_ReturnMap;
