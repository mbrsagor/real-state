import React, { Component } from "react";
import { connect } from "react-redux";
import { createTodo } from "../store/actions/todoAction";
import Form from "./Form";

class TodoFrom extends Component {
  state = {
    title: "",
    content: "",
    error: {},
  };

  changeHandler = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  submitHandler = (event) => {
    event.preventDefault();
    let { title, content } = this.state;
    this.props.createTodo({ title, content });
    this.setState({
      title: "",
      content: "",
    });
  };

  render() {
    const { title, content, error } = this.state;
    return (
      <>
        <Form
          error={error}
          title={title}
          content={content}
          submitHandler={this.submitHandler}
          changeHandler={this.changeHandler}
        />
      </>
    );
  }
}

export default connect(null, { createTodo })(TodoFrom);
