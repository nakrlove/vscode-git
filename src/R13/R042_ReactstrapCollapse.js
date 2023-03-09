import React, { Component } from 'react';
import { UncontrolledCollapse, Button, CardBody, Card } from 'reactstrap';

class R042_ReactstrapCollapse extends Component {

  alertMsg = (e) => {
    alert('뭐야')
  }

  render() {
    return (
      <div>
        <Button color="warning" id="toggle">
          펼치기/접기
        </Button>
        <UncontrolledCollapse toggler="#toggle" defaultOpen={true} >
          <Card>
            <CardBody>
              REACT 200
            </CardBody>
           
          </Card>
          <Card onClick={ this.alertMsg }>
            <CardBody>
              REACT 200111111
            </CardBody>
           
          </Card>
        </UncontrolledCollapse>
      </div>
    )}
}

export default R042_ReactstrapCollapse;