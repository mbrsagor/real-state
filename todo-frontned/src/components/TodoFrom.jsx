import React, { Component } from "react";
import { connect } from "react-redux";
import { createTodo } from "../store/actions/todoAction";

class TodoFrom extends Component {
  state = {
    title: "",
    content: "",
    is_save: true,
  };

  changeHandler = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  submitHandler = (event) => {
    event.preventDefault();
    this.props.createTodo(this.state);
    this.setState({
      title: "",
      content: "",
    });
  };

  render() {
    return (
      <>
        <form onSubmit={this.submitHandler}>
          <div className="from-group">
            <label htmlFor="title">Enter todo title</label>
            <input
              type="text"
              name="title"
              value={this.state.title}
              onChange={this.changeHandler}
              className="form-control"
              placeholder="Enter title here"
            />
          </div>
          <div className="from-group">
            <label htmlFor="content">Enter Description</label>
            <textarea
              name="content"
              id="content"
              className="form-control"
              placeholder="Enter todo description"
              cols="30"
              rows="5"
              value={this.state.content}
              onChange={this.changeHandler}
            ></textarea>
          </div>
          <div className="from-group mt-2 mb-2">
            Is Save <input type="checkbox" value={this.state.is_save} />
          </div>
          <button className="btn btn-success btn-sm">Save</button>
        </form>
      </>
    );
  }
}

export default connect(null, { createTodo })(TodoFrom);
