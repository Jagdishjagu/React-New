import React, { Component } from "react";
import Userdata from "./Userdata";

// sendind this component from Data to Userdata//
export class Data extends Component {
  users = [
    { eid: 101, ename: "Rahul", esal: 25000 },
    { eid: 102, ename: "Sonia", esal: 35000 },
    { eid: 103, ename: "Modi", esal: 45000 },
  ];
  render() {
    return (
      <div>
        {" "}
        <h1> Data Component: sendind this component from Data to User data</h1>
        <hr />
        <Userdata e_users={this.users} />
      </div>
    );
  }
}

export default Data;
