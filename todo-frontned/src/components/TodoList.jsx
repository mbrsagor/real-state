import React, { Component } from "react";

class TodoList extends Component {
  render() {
    return (
      <>
        <ul className="list-group">
          <li className="list-group-item">
            My todo list 1 <span className="ml-3 bg-success">Done</span>
          </li>
          <li className="list-group-item">
            My todo list 2 <span className="ml-3 bg-danger">In Complete</span>
          </li>
          <li className="list-group-item">
            My todo list 3 <span className="ml-3 bg-warning">InProcess</span>
          </li>
        </ul>
      </>
    );
  }
}

export default TodoList;
