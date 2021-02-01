import React, { Component } from "react";
import { connect } from "react-redux";
import { todoUpdate, todoDetail } from "../store/actions/todoAction";
import Form from "./Form";

class UpdateTodo extends Component {
  state = {
    title: "",
    content: "",
    error: {},
  };

  componentDidMount() {
    this.props.todoDetail(this.props.match.params.id);
    // console.log(this.props.todoDetail(this.props.match.params.id));
  }

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
    let { title, content } = this.state;
    this.props.createTodo({ title, content });
    this.setState({
      title: "",
      content: "",
    });
  };

  render() {
    const { title, content, error } = this.state;
    const { todo } = this.props;
    console.log(todo);
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

const mapStateToProps = (state) => ({
  todos: state.todos,
  todo: state.todos.todos,
});

export default connect(mapStateToProps, { todoUpdate, todoDetail })(UpdateTodo);
