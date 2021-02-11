import React, { Component } from "react";
import { Link } from "react-router-dom";
import {connect} from 'react-redux';
import AuthNav from './AuthNav';
import NavAuthTwo from './NavAuthTwo';

class Header extends Component {
  render() {
    let {auth} = this.props
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
        <div className="container">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <Link className="navbar-brand" to="/">
            Todo App
          </Link>
          <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                Todo List <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/add-todo">Add New </Link>
            </li>
            {auth.isAuthenticated ? <AuthNav /> : <NavAuthTwo />}
          </ul>
        </div>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = state => ({
  auth : state.auth
})

export default connect(mapStateToProps) (Header);
