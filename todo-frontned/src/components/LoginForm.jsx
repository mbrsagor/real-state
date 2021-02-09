import React, { Component } from 'react';
import { connect } from "react-redux";
import {Link} from 'react-router-dom';
import {login} from '../store/actions/authAction'

class Login extends Component {
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
        // const {auth} = this.props;
        // console.log(auth);
        return (
            <>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 mt-5 offset-3">
                        <div className="card mt-5">
                            <div className="card-header text-center">
                                <h4 className="card-title">Login Page</h4>
                            </div>
                            <div className="card-body">
                                <form onSubmit={this.props.submitHandler}>
                                    <div className="form-group">
                                        <label htmlFor="username">Enter Username</label>
                                        <input 
                                            type="text" 
                                            value={this.props.username}
                                            id="username"
                                            name="username"
                                            onChange={this.props.changeHandler}
                                            className={
                                                error && error.username
                                                  ? "form-control is-invalid"
                                                  : "form-control"
                                              }
                                            placeholder="Enter your username"
                                        />
                                        {error.username && <div className="invalid-feedback">{error.username}</div>}
                                    </div>  
                                    <div className="form-group">
                                        <label htmlFor="password">Enter Password</label>
                                        <input 
                                            type="password" 
                                            name="password"
                                            value={this.props.password}
                                            id="password"
                                            onChange={this.props.changeHandler}
                                            className={
                                                error && error.password
                                                  ? "form-control is-invalid"
                                                  : "form-control"
                                              }
                                            placeholder="Enter your password"
                                        />
                                        {error.password && <div className="invalid-feedback">{error.password}</div>}
                                    </div>
                                    <button className="btn btn-success btn-sm">Login</button>
                                </form> 
                            </div>
                            <div className="card-footer">
                               <p>Don't have account yet? Register <Link to="/registration">here.</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </>
        )
    }
}


const mapStateToProps = (state) => ({
    auth: state.auth
  });

export default connect(mapStateToProps, {login}) (Login)
