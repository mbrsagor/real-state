import React, { Component } from "react";

export class Form extends Component {
  render() {
    return (
      <div>
        <form onSubmit={this.props.submitHandler}>
          <div className="from-group">
            <label htmlFor="title">Enter todo title</label>
            <input
              type="text"
              name="title"
              value={this.props.title}
              onChange={this.props.changeHandler}
              className={
                this.props.error && this.props.error.name
                  ? "form-control is-invalid"
                  : "form-control"
              }
              placeholder="Enter title here"
            />
            {this.props.error && <div className="invalid-feedback">{this.props.error.name}</div>}
          </div>
          <div className="from-group">
            <label htmlFor="content">Enter Description</label>
            <textarea
              name="content"
              className={
                this.props.error && this.props.error.name
                  ? "form-control is-invalid"
                  : "form-control"
              }
              placeholder="Enter todo description"
              cols="30"
              rows="5"
              value={this.props.content}
              onChange={this.props.changeHandler}
            ></textarea>
            {this.props.error && <div className="invalid-feedback">{this.props.error.name}</div>}
          </div>
          <button className="btn btn-success btn-sm mt-2">Save</button>
        </form>
      </div>
    );
  }
}

export default Form;
