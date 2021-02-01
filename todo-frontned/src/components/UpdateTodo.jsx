import React, { Component } from "react";
import { connect } from "react-redux";
import { todoUpdate, todoDetail } from "../store/actions/todoAction";
import Form from "./Form";

class UpdateTodo extends Component {
  state = {
    title: "",
    content: "",
    error: null
  };

  // 
  componentDidMount() {
    this.props.todoDetail(this.props.match.params.id);
  }

  changeHandler = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  submitHandler = (event) => {
    event.preventDefault();
    let { title, content } = this.state;
    this.props.todoUpdate(this.props.match.params.id);
    this.setState({
      title: title,
      content: content,
    });
  };

  render() {
    const { title, content, error } = this.state;
    let { todo } = this.props;
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
                    title={todo && todo.title}
                    content={todo && todo.content}
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
  todo: state.todos.todo,
});

export default connect(mapStateToProps, { todoUpdate, todoDetail })(UpdateTodo);
