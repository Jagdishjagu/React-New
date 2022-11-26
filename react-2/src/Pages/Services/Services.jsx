import React, { Component } from "react";
import Data from "./Props/Data";
import Users from "./Props/Users";
export class Services extends Component {
  render() {
    return (
      <>
        <hr />
        <Data />
        <hr />
        <h1>Using User data from with table</h1>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="table table-hover">
                <thead>
                  <tr className=" bg-primary text-white">
                    <th>Employee ID</th>
                    <th>Employee Name</th>
                    <th>Employee Salary</th>
                    <th>Employee Gender</th>
                  </tr>
                </thead>
                <tbody>
                  {Users.map((users) => {
                    return (
                      <tr key={users.id}>
                        <td>{users.id}</td>
                        <td>{users.name}</td>
                        <td>{users.email}</td>
                        <td>{users.gender}</td>
                      </tr>
                    );
                  })}
                  <hr />
                </tbody>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Services;
