import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchTodo, deleteTodoList } from "../store/actions/todoAction";
import { Link } from "react-router-dom";

class TodoList extends Component {
  componentDidMount() {
    this.props.fetchTodo();
  }
  render() {
    const { todos } = this.props;
    // console.log(todos);
    return (
      <>
        <ul className="list-group todo_list">
          {todos.results &&
            todos.results.map((todo, index) => {
              return (
                <li key={index} className="list-group-item todo_item_list">
                  {todo.title}
                  <>
                    <span className="ml-3">{todo.created_at}</span>
                  </>
                  <div className="mt-3">
                    <Link
                      className="btn btn-info btn-sm mr-2 detail_link"
                      to={`/todo-details/${todo.id}`}
                    >
                      Details
                    </Link>
                    <Link to={`/todo-update/${todo.id}`} className="btn btn-success btn-sm mr-2">
                      Update
                    </Link>
                    <button
                      onClick={() => this.props.deleteTodoList(todo.id)}
                      className="btn btn-danger btn-sm mr-2"
                    >
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

export default connect(mapStateToProps, { fetchTodo, deleteTodoList })(
  TodoList
);
