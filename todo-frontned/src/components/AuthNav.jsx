import React, { Component } from 'react';
import {connect} from 'react-redux';
import {logout} from '../store/actions/authAction';

class AuthNav extends Component {
    render() {
        let {auth} = this.props
        // console.log(this.props.history)
        return (
            <>
                <li className="nav-item">
                    <button onClick={() =>this.props.logout(this.props.history)} className="btn btn-default btn-sm nav-link">Logout </button>
                </li>
                <li className="nav-item mt-2"> {auth.user.email}</li>
            </>
        )
    }
}

const mapStateToProps = state => ({
    auth : state.auth
  })

export default connect(mapStateToProps, {logout}) (AuthNav)
