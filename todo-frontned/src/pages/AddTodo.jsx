import React, { Component } from "react";
import TodoFrom from "../components/TodoFrom";

class AddTodo extends Component {
  render() {
    return (
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6 offset-3">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Add New Todo</h4>
              </div>
              <div className="card-body">
                <TodoFrom />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AddTodo;
