import React, { Component } from 'react';
import {connect} from 'react-redux';
import {registration} from '../store//actions/authAction';


class Register extends Component {

    state = {
        error: {}
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (
          JSON.stringify(nextProps.auth.error) !== JSON.stringify(prevState.error)
        ) {
          return {
            error: nextProps.auth.error,
          };
        }
        return null;
      }

    render() {
        const { error } = this.state;
        return (
            <>
                <form onSubmit={this.props.submitHandler}>
                    <div className="from-group">
                        <label htmlFor="username">Enter username</label>
                        <input
                            type="text"
                            value={this.props.username}
                            onChange={this.props.changeHandler}
                            id="username"
                            className={
                                error && error.username
                                  ? "form-control is-invalid"
                                  : "form-control"
                              }
                            name="username"
                            placeholder="Enter username"
                         />
                         {error.username && <div className="invalid-feedback">{error.username}</div>}
                    </div>
                    <div className="from-group">
                        <label htmlFor="email">Enter email</label>
                        <input
                            type="email" 
                            id="email"
                            value={this.props.email}
                            onChange={this.props.changeHandler}
                            name="email"
                            className={
                                error && error.email
                                  ? "form-control is-invalid"
                                  : "form-control"
                              }
                            placeholder="Enter a valid email"
                         />
                         {error.email && <div className="invalid-feedback">{error.email}</div>}
                    </div>
                    <div className="from-group">
                        <label htmlFor="password">Enter password</label>
                        <input
                            type="password" 
                            id="password"
                            className={
                                error && error.password
                                  ? "form-control is-invalid"
                                  : "form-control"
                              }
                            value={this.props.password}
                            onChange={this.props.changeHandler}
                            name="password"
                            placeholder="*****************"
                         />
                         {error.password && <div className="invalid-feedback">{error.password}</div>}
                    </div>
                    <div className="from-group">
                        <label htmlFor="password_confirm">Enter confirm password</label>
                        <input
                            type="password" 
                            id="password_confirm"
                            className={
                                error && error.password_confirm
                                  ? "form-control is-invalid"
                                  : "form-control"
                              }
                            value={this.props.password_confirm}
                            onChange={this.props.changeHandler}
                            name="password_confirm"
                            placeholder="*****************"
                         />
                         {error.password_confirm && <div className="invalid-feedback">{error.password_confirm}</div>}
                    </div>
                    <button className="btn btn-success btn-sm mt-2">Register</button>
                </form>
            </>
        )
    }
}

const mapStateToProps = state => ({
    auth : state.auth
})

export default connect(mapStateToProps, {registration}) (Register);
