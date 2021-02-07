import React, { Component } from 'react';
import LoginForm from '../components/LoginForm';


class LoginView extends Component {

    state = {
        username: '',
        password: ''
    }
    
    submitHandler = e => {
        e.preventDefault();
        console.log(e)
    }

    changeHandler = e => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };


    render() {
        const {username, password} = this.state
        return (
            <>
                <LoginForm 
                    username={username}
                    password={password}
                    changeHandler={this.changeHandler}
                    submitHandler={this.submitHandler} 
                />
            </>
        )
    }
}

export default LoginView
