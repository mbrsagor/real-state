import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Login extends Component {
    render() {
        return (
            <>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 mt-5 offset-3">
                        <div className="card mt-5">
                            <div className="card-header">
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
                                            className="form-control" 
                                            placeholder="Enter your username"
                                        />
                                    </div>  
                                    <div className="form-group">
                                        <label htmlFor="password">Enter Password</label>
                                        <input 
                                            type="password" 
                                            name="password"
                                            value={this.props.password}
                                            id="password"
                                            onChange={this.props.changeHandler}
                                            className="form-control" 
                                            placeholder="Enter your password"
                                        />
                                    </div>
                                    <button className="btn btn-success btn-sm">Login</button>
                                </form> 
                            </div>
                            <div className="card-footer">
                               <p>You have not account yet? Register <Link to="/">here.</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </>
        )
    }
}

export default Login
