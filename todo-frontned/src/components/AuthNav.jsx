import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {logout} from '../store/actions/authAction';

class AuthNav extends Component {
    render() {
        let {auth} = this.props
        return (
            <>
                <li className="nav-item">
                    <Link onClick={() =>this.props.logout(this.props.history)} className="nav-link" to="/">Logout </Link>
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
