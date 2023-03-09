import React, { Component } from 'react';
import { Jumbotron, Button } from 'reactstrap';

class R046_ReactstrapJumbotron extends Component {
  render() {
    return (
      <div style={{backgroundColor: "#D38C7C"}}>
        {/* <Jumbotron style={{backgroundColor: "#D38C7C"}}> */}
          {/* <h1 className="Jumbotron display-4 ">REACT 200</h1>
          <p className="h4">Contrary to popular belief, Lorem Ipsum is not simply random text.</p>
          <hr className="my-2" />
          <p>There are many variations of passages of Lorem Ipsum available.</p>
          <p className="lead">
            <Button color="danger">Go Detail</Button>
          </p> */}
        {/* </Jumbotron> */}


        <div class="container-fluid bg-light text-dark p-5">
  <div class="container bg-light p-5">
    <h1 class="display-4 fw-bold">Welcome to Admin Dashboard</h1>
    <hr/>
      <p>Go to My Website</p>
      <a href="#" class="btn btn-primary">link</a>
  </div>
</div>


      </div>
    )}
}

export default R046_ReactstrapJumbotron;