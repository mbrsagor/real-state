import React, { Component } from "react";
import { connect } from "react-redux";

class Form extends Component {
  state = {
    error: {},
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    if (
      JSON.stringify(nextProps.todos.error) !== JSON.stringify(prevState.error)
    ) {
      return {
        error: nextProps.todos.error,
      };
    }
    return null;
  }

  render() {
    const { error } = this.state;
    return (
      <>
        {this.props.success_message && <p>{this.props.success_message}</p>}
        <form onSubmit={this.props.submitHandler}>
          <div className="from-group">
            <label htmlFor="title">Enter todo title</label>
            <input
              type="text"
              id="title"
              name="title"
              value={this.props.title}
              onChange={this.props.changeHandler}
              className={
                error && error.title
                  ? "form-control is-invalid"
                  : "form-control"
              }
              placeholder="Enter title here"
            />
            {error && <div className="invalid-feedback">{error.title}</div>}
          </div>
          <div className="from-group">
            <label htmlFor="content">Enter Description</label>
            <textarea
              name="content"
              id="content"
              className={
                error && error.content
                  ? "form-control is-invalid"
                  : "form-control"
              }
              placeholder="Enter todo description"
              cols="30"
              rows="5"
              value={this.props.content}
              onChange={this.props.changeHandler}
            ></textarea>
            {error && <div className="invalid-feedback">{error.content}</div>}
          </div>
          <button className="btn btn-success btn-sm mt-2">Save</button>
        </form>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  todos: state.todos,
});

export default connect(mapStateToProps)(Form);
