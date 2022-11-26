import React, { Component } from "react";
import Userdata from "./Userdata";
import Userdetails from "./Userdetails";

export class Data extends Component {
  users = [{ eid: 101, ename: "Rahul", esal: 45000 }];
  render() {
    return (
      <div>
        {" "}
        <h1> Data Component</h1>
        <Userdata e_users={this.users} />
        <Userdetails e_users={this.users} />
      </div>
    );
  }
}

export default Data;
