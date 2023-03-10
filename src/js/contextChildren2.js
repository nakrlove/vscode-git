import React from 'react'
import {Consumer}  from "../R13/R076_ContextApi";

class contextChildren2 extends React.Component {
    render () {
      return (
        <Consumer>
            { contextValue  => <h3>{`contextValue : ${contextValue} ,${this.props.name}`}</h3>}
        </Consumer>
      )
    }
}
export default contextChildren2