import React, { Component } from 'react';
import { Button, ButtonGroup } from 'reactstrap';

class R038_ReactstrapButtonGroup extends Component {
  constructor (props) {
    super(props);
    this.state = { number: 10 }
  }

  move = (type, e) => {
    if(type === 'Left'){
      this.setState({number: this.state.number - 1})
    }else if(type === 'Right')(
      this.setState({number: this.state.number + 1})
    )
  }

  click = (e) => {
    alert('confirm')
  }
  render() {
    return (
      <div style={{padding: "0px"}}>
        <ButtonGroup style={{padding: "0px"}}>
          <Button onClick={e => this.move('Left')}>Left</Button>
          <Button onClick={e => this.move('Middle')}>Middle</Button>
          <Button onClick={e => this.move('Right')}>Right</Button>
        </ButtonGroup>

        <Button color="primary" onClick={ e => this.click() }>blue</Button>
        <Button color="info">teal</Button>
        <Button color="success">green</Button>
        <Button color="warning">yellow</Button>
        <Button color="danger">red</Button>
        <Button color="dark">dark gray</Button>
        <Button color="secondary">gray</Button>
        <Button color="light">white</Button>
        <br/>{this.state.number}
      </div>
      )
  }
}

export default R038_ReactstrapButtonGroup;
