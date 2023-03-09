import { Component } from "react";
import datatype from "prop-types";

class R018_PropsDatatype extends Component {
  // constructor()
  render() {
    let { String, Number, Boolean, Array, ObjectJson, Function } = this.props;
    return (
      <div style={{ padding: "0px" }}>
        <p>StringProps: {String}</p>
        <p>NumberProps: {Number}</p>
        <p>BooleanProps: {Boolean.toString()}</p>
        <p>ArrayProps: {Array.toString()}</p>
        <p>ObjectProps react: {ObjectJson.react}</p>
        <p>ObjectProps: {JSON.stringify(ObjectJson)}</p>
        <p>FunctionProps: {Function}</p>
      </div>
    );
  }
}

R018_PropsDatatype.propTypes = {
  String: datatype.number.isRequired,
  Number: datatype.number,
  Boolean: datatype.bool,
  Array: datatype.array,
  ObjectJson: datatype.shape({
    react: datatype.string,
    twohundred: datatype.number,
  }),
  Function: datatype.func,
};

// R018_PropsDatatype.propTypes = {
//   String: datatype.isRequired,
// };
export default R018_PropsDatatype;
