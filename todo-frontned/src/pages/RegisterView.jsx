import React, { Component } from 'react';
import Register from '../components/Register';
import {Link} from 'react-router-dom';

class RegisterView extends Component {
    render() {
        return (
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-6 offset-3">
                        <div className="card">
                            <div className="card-header text-center">
                                <h4 className="card-title">Registration</h4>
                            </div>
                            <div className="card-body">
                                <Register />
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

export default RegisterView
