import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchTodo } from "../store/actions/todoAction";
// import { Link } from "react-router-dom";

class TodoList extends Component {
  componentDidMount() {
    this.props.fetchTodo();
  }
  render() {
    return (
      <>
        <ul>
          {this.props &&
            this.props.todos.map(todo => {
              return (
                <li key={todo.id} className="list-group-item">
                  {todo.title}
                  <>
                    {todo.is_save ? (
                      <span className="ml-3 bg-success text-light p-1">
                        Publish
                      </span>
                    ) : (
                      <span className="ml-3 bg-warning text-light p-1">
                        Private
                      </span>
                    )}
                    <span className="ml-3">{todo.created_at}</span>
                  </>
                  <div className="mt-3">
                    {/* <Link className="btn btn-info btn-sm mr-2" to="facebook">Details</Link> */}
                    <button className="btn btn-success btn-sm mr-2">
                      Update
                    </button>
                    <button className="btn btn-danger btn-sm mr-2">
                      Delete
                    </button>
                  </div>
                </li>
              );
            })}
        </ul>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  todos: state.todos,
});

export default connect(mapStateToProps, { fetchTodo })(TodoList);
