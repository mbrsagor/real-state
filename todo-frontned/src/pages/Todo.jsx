import React, { Component } from "react";
import TodoList from "../components/TodoList";

class Todo extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-header">
          <h4 className="card-title">Add New Todo List</h4>
        </div>
        <div className="card-body">
          <TodoList />
        </div>
      </div>
    );
  }
}

export default Todo;
