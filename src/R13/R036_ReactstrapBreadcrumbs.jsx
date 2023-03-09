import React, { Component } from "react";
import { Breadcrumb, BreadcrumbItem, Badge } from "reactstrap";

class R036_ReactstrapBreadcrumbs extends Component {
  render() {
    return (
      <div id="top">
        <Breadcrumb tag="nav" listTag="div">
          <BreadcrumbItem tag="a" href="#top">
            Go_top
          </BreadcrumbItem>
          <BreadcrumbItem tag="a" href="#bottom">
            Go_top
          </BreadcrumbItem>
          PRODUCT NAME <Badge color="secondary">hit</Badge>
        </Breadcrumb>
        <div id="bottom" style={{ marginTop: "1000px" }}>
          <span>bottom</span>
        </div>
      </div>
    );
  }
}

export default R036_ReactstrapBreadcrumbs;
