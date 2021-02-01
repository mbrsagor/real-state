import React, { Component } from "react";
import { connect } from "react-redux";
import { todoUpdate, todoDetail } from "../store/actions/todoAction";
import Form from "./Form";

class UpdateTodo extends Component {
  state = {
    title: "",
    content: ""
  };

  componentDidMount() {
    this.props.todoDetail(this.props.match.params.id);
    console.log(this.props.match.params.id);
  }

  changeHandler = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  submitHandler = (event) => {
    event.preventDefault();
    let { title, content } = this.state;
    this.props.todoUpdate({ title, content });
    this.setState({
      title: this.state.title,
      content: this.state.content,
    });
  };

  render() {
    const { title, content, error } = this.state;
    // const { todo } = this.props;
    // console.log(todo);
    return (
      <>
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-6 offset-3">
              <div className="card">
                <div className="card-header">
                  <h4 className="card-title">Add New Todo</h4>
                </div>
                <div className="card-body">
                  <Form
                    error={error}
                    title={title}
                    content={content}
                    submitHandler={this.submitHandler}
                    changeHandler={this.changeHandler}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  todos: state.todos,
  todo: state.todos.todos,
});

export default connect(mapStateToProps, { todoUpdate, todoDetail })(UpdateTodo);
