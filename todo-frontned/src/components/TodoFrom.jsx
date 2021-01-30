import React, { Component } from "react";
import { connect } from "react-redux";
import { createTodo } from "../store/actions/todoAction";

class TodoFrom extends Component {
  state = {
    title: "",
    content: "",
    is_save: true,
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
    const { title, content, error } = this.state;
    return (
      <>
        <form onSubmit={this.submitHandler}>
          <div className="from-group">
            <label htmlFor="title">Enter todo title</label>
            <input
              type="text"
              name="title"
              value={title}
              onChange={this.changeHandler}
              className={error ? 'form-control is-invalid': 'form-control'}
              placeholder="Enter title here"
            />
            {error && <div className="invalid-feedback">{error.title}</div>}
          </div>
          <div className="from-group">
            <label htmlFor="content">Enter Description</label>
            <textarea
              name="content"
              id="content"
              className={error ? 'form-control is-invalid': 'form-control'}
              placeholder="Enter todo description"
              cols="30"
              rows="5"
              value={content}
              onChange={this.changeHandler}
            ></textarea>
            {error && <div className="invalid-feedback">{error.content}</div>}
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

const mapStateToProps = (state) => ({
  todos: state.todos,
});

export default connect(mapStateToProps, { createTodo })(TodoFrom);
