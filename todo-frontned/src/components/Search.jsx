import React, { Component } from 'react';

class Search extends Component {
    render() {
        return (
            <div>
                <div className="form-group">
                    <input
                     type="text" 
                     className="form-control" 
                     placeholder="Search..."
                    />
                </div>
            </div>
        )
    }
}

export default Search
