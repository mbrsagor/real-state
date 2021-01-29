import React, { Component } from "react";
import TodoFrom from "../components/TodoFrom";

class AddTodo extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-header">
          <h4 className="card-title">Add New Todo</h4>
        </div>
        <div className="card-body">
          <TodoFrom />
        </div>
      </div>
    );
  }
}

export default AddTodo;
