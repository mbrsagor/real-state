import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchTodo } from "../store/actions/todoAction";
import { Link } from "react-router-dom";

class TodoList extends Component {
  componentDidMount() {
    this.props.fetchTodo();
  }
  render() {
    return (
      <>
        <ul className="list-group todo_list">
          {this.props && this.props.todos.length > 0 ? (
            this.props.todos.map((todo, index) => {
              return (
                <li key={todo.id} className="list-group-item todo_item_list">
                  {todo.title}
                  <>
                    {todo.is_save ? (
                      <span className="ml-3 bg-success text-light status">
                        Publish
                      </span>
                    ) : (
                      <span className="ml-3 bg-warning text-light status">
                        Private
                      </span>
                    )}
                    <span className="ml-3">{todo.created_at}</span>
                  </>
                  <div className="mt-3">
                    <Link className="btn btn-info btn-sm mr-2 detail_link" to="facebook">Details</Link>
                    <button className="btn btn-success btn-sm mr-2">
                      Update
                    </button>
                    <button className="btn btn-danger btn-sm mr-2">
                      Delete
                    </button>
                  </div>
                </li>
              );
            })
          ) : (
            <span>Loading...</span>
          )}
        </ul>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  todos: state.todos,
});

export default connect(mapStateToProps, { fetchTodo })(TodoList);