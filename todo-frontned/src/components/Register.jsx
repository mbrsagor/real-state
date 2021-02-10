import React, { Component } from 'react'

class Register extends Component {
    render() {
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
                            className="form-control"
                            name="username"
                            placeholder="Enter username"
                         />
                    </div>
                    <div className="from-group">
                        <label htmlFor="email">Enter email</label>
                        <input
                            type="email" 
                            id="email"
                            value={this.props.email}
                            onChange={this.props.changeHandler}
                            name="email"
                            className="form-control"
                            placeholder="Enter a valid email"
                         />
                    </div>
                    <div className="from-group">
                        <label htmlFor="password">Enter password</label>
                        <input
                            type="password" 
                            id="password"
                            className="form-control"
                            value={this.props.password}
                            onChange={this.props.changeHandler}
                            name="password"
                            placeholder="*****************"
                         />
                    </div>
                    <div className="from-group">
                        <label htmlFor="password_confirm">Enter confirm password</label>
                        <input
                            type="password" 
                            id="password2"
                            className="form-control"
                            value={this.props.password_confirm}
                            onChange={this.props.changeHandler}
                            name="password_confirm"
                            placeholder="*****************"
                         />
                    </div>
                    <button className="btn btn-success btn-sm mt-2">Register</button>
                </form>
            </>
        )
    }
}

export default Register;
