import React, { Component } from "react";

export class Userdata extends Component {
  render() {
    return (
      <div>
        <h1>User Data:</h1>
        <h1>Employee ID : {this.props.e_users[0].eid}</h1>
        <h1>Employee ID : {this.props.e_users[0].ename}</h1>
        <h1>Employee ID : {this.props.e_users[0].esal}</h1>
      </div>
    );
  }
}

export default Userdata;
