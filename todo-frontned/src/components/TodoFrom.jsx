import React, { Component } from "react";

class TodoFrom extends Component {
  state = {
    title: "",
    content: "",
    is_save: true,
  };

  changeHandler = (event) => {
    this.setState({
      [event.target.value]: event.target.name,
    });
  };

  submitHandler = (event) => {
    event.preventDefault();
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
              name="content"
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

export default TodoFrom;
