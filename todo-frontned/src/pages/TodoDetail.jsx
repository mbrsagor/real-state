import React, { Component } from "react";
import { connect } from "react-redux";
import { todoDetail } from "../store/actions/todoAction";

class TodoDetail extends Component {

  componentDidMount() {
    this.props.todoDetail(this.props.match.params.id);
  }

  render() {
    let { todo } = this.props;
    // console.log(todo);
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-3">
            <div className="card">
              <div className="card-header">
                {todo && <h4 className="card-title">{todo.title}</h4>}
              </div>
              <div className="card-body">
                {todo && <p className="card-text">{todo.content}</p>}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  todos: state.todos,
  todo: state.todos.todo,
});

export default connect(mapStateToProps, {todoDetail}) (TodoDetail)
