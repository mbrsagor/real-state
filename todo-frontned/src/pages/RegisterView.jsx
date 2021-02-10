import React, { Component } from 'react';
import Register from '../components/Register';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {registration} from '../store/actions/authAction';

class RegisterView extends Component {

    state = {
        username: '',
        email: '',
        password: '',
        password_confirm: ''
    }

    changeHandler = e => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    submitHandler = e => {
        e.preventDefault();
        const {username, email, password, password_confirm} = this.state;
        this.props.registration({username, email, password, password_confirm}, this.props.history)
        this.setState({
            username: '',
            email: '',
            password: '',
            password_confirm: ''
        })
    }

    render() {
        let {username, email, password, password_confirm} = this.state;
        return (
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-6 offset-3">
                        <div className="card">
                            <div className="card-header text-center">
                                <h4 className="card-title">Registration</h4>
                            </div>
                            <div className="card-body">
                                <Register 
                                    username={username}
                                    email={email}
                                    password={password}
                                    password_confirm={password_confirm}
                                    changeHandler = {this.changeHandler}
                                    submitHandler= {this.submitHandler}
                                />
                            </div>
                            <div className="card-footer">
                                <p>Already registered? login <Link to="/login">here.</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(null, {registration}) (RegisterView)
