import React, { Component } from "react";
import { connect } from "react-redux";
import { todoDetails } from "../store/actions/todoAction";

class Tododetails extends Component {
  
  componentDidMount() {
    // this.props.todoDetails(this.state.id);
  }
  render() {
    const { todo } = this.props;
    console.log(todo);
    return (
      <div>
        <h4 className="card-title">Title </h4>
        <p className="description"></p>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  todo: state.todos.todo,
});

export default connect(mapStateToProps, { todoDetails })(Tododetails);
