import React, { Component } from 'react';
import { Form, Label, Input, Row, Col, FormGroup } from 'reactstrap';

class R044_ReactstrapForm extends Component {
  render() {
    return (
      <Form>
        <div class="input-group mb-50">
          <span class="input-group-text" id="basic-addon1">@</span>
          <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
        </div>

        <Label for="exampleGender">gender</Label>
        <Input type="select" bsSize="lg">
          <option>no select</option>
          <option>woman</option>
          <option>man</option>
        </Input>
        <Row form >
          <Col md={4}>
            <FormGroup>
              <Label for="exampleAddress">address</Label>
              <Input type="text" name="address" id="address"/>
            </FormGroup>
          </Col>
          <Col md={2}>
            <FormGroup>
              <Label for="exampleMobile">mobile</Label>
              <Input type="text" name="mobile" id="mobile"/>
            </FormGroup>
          </Col>
          <Col md={2}>
            <FormGroup>
              <Label for="exampleAge">age</Label>
              <Input type="text" name="age" id="age"/>
            </FormGroup>
          </Col>
        </Row>
        
      </Form>
      
    )}
}

export default R044_ReactstrapForm;