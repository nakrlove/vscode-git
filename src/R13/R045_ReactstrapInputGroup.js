import React, { Component } from 'react';
import { InputGroup, InputGroupText, Input, Button } from 'reactstrap';

class R045_ReactstrapInputGroup extends Component {
  render() {
    return (
      <div className="input-group-append">
      <InputGroup>
        <Input placeholder="userid" />
        {/* <InputGroupAddon addonType="append"> */}
          <InputGroupText>@reactmail.com</InputGroupText>
        {/* </InputGroupAddon> */}
      </InputGroup>
      <InputGroup>
        {/* <InputGroupAddon addonType="prepend"> */}
          <Button>버튼</Button>
        {/* </InputGroupAddon> */}
        <Input />
      </InputGroup>
      </div>
    )}
}

export default R045_ReactstrapInputGroup;