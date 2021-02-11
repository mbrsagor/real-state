import React, { Component } from 'react';
import {Link} from 'react-router-dom';


export class NavAuthTwo extends Component {
    render() {
        return (
            <>
             <li className="nav-item">
                <Link className="nav-link" to="/login">Login</Link>
             </li>   
            </>
        )
    }
}

export default NavAuthTwo
