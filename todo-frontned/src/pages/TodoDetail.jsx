import React, { Component } from "react";
import Tododetails from "../components/Tododetails";

class TodoDetail extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-3">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Todo Detail page</h4>
              </div>
              <div className="card-body">
                <Tododetails />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TodoDetail;
