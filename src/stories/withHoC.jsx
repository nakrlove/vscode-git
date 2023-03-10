import React from "react";
// import PropTypes from "prop-types";
export default function withHoC(WrappedComponent) {
  const { displayName, name: componentName } = WrappedComponent;
  const wrappedComponentName = displayName || componentName;

  return class WithHoC extends React.Component {
    static displayName = `withHoC(${wrappedComponentName})`;
    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
}
