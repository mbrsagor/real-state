import React, { Component } from "react";
import { connect } from "react-redux";
import { todoDetail } from "../store/actions/todoAction";

class Tododetails extends Component {
  componentDidMount() {
    this.props.todoDetail(this.props.match.params.id);
  }
  render() {
    let { todo } = this.props;
    console.log(todo);
    return (
      <div>
        <h2>Todo detail page</h2>
        <h4 className="title">This is a new todo title</h4>
        <p>
          Intrinsicly revolutionize 2.0 benefits after pandemic outsourcing.
          Progressively fashion client-centered meta-services vis-a-vis
          synergistic relationships. Dynamically aggregate best-of-breed
          information for customized benefits.
        </p>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  todo: state.todos.todo,
});

export default connect(mapStateToProps, todoDetail )(Tododetails);
