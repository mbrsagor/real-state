import React from "react";
import Todo from "../pages/Todo";
import AddTodo from "../pages/AddTodo";

function App() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-7">
          <Todo />
        </div>
        <div className="col-md-5">
          <AddTodo />
        </div>
      </div>
    </div>
  );
}

export default App;
