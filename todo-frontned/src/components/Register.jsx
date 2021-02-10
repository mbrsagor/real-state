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
                            name="email"
                            className="form-control"
                            placeholder="Enter a valid email"
                         />
                    </div>
                    <div className="from-group">
                        <label htmlFor="password1">Enter password</label>
                        <input
                            type="password" 
                            id="password"
                            className="form-control"
                            value={this.props.password1}
                            name="password1"
                            placeholder="*****************"
                         />
                    </div>
                    <div className="from-group">
                        <label htmlFor="password2">Enter confirm password</label>
                        <input
                            type="password" 
                            id="password2"
                            className="form-control"
                            value={this.props.password2}
                            name="password2"
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
