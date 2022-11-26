import React, { Component } from "react";

// Receiving this component from Data to Userdata//
export class Userdata extends Component {
  render() {
    return (
      <div>
        <h1>User Data: Receiving this component from Data to Userdata</h1>
        <h3>Employee ID : {this.props.e_users[0].eid}</h3>
        <h3>Employee Name : {this.props.e_users[0].ename}</h3>
        <h3>Employee Salary : {this.props.e_users[0].esal}</h3>
        <hr />
        <h3>Employee ID : {this.props.e_users[1].eid}</h3>
        <h3>Employee Name : {this.props.e_users[1].ename}</h3>
        <h3>Employee Salary : {this.props.e_users[1].esal}</h3>
        <hr />
        <h3>Employee ID : {this.props.e_users[2].eid}</h3>
        <h3>Employee Name : {this.props.e_users[2].ename}</h3>
        <h3>Employee Salary : {this.props.e_users[2].esal}</h3>
      </div>
    );
  }
}

export default Userdata;
