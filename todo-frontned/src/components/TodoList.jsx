import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchTodo, deleteTodoList } from "../store/actions/todoAction";
import Search from './Search';

class TodoList extends Component {
  state = {
    searchValue: ''
  }

  searchHandler  = event => {
    this.setState({
      searchValue: event.target.value
    })

  }

  componentDidMount() {
    this.props.fetchTodo();
  }
  render() {
    const { todos } = this.props;
    let filterTodo = todos.results && todos.results.filter((todo) =>{
      return todo.title.toLowerCase().includes(this.state.searchValue.toLowerCase())
    })
    
    // console.log(filterTodo);
    return (
      <>
        <Search 
        searchValue={this.searchValue}
        searchHandler={this.searchHandler} />

        <ul className="list-group todo_list">
          {filterTodo &&
            filterTodo.map((todo, index) => {
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
