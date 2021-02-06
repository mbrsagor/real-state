import React, { Component } from 'react';

class Search extends Component {
    render() {
        return (
            <div>
                <div className="form-group">
                    <input
                     onChange={this.props.searchHandler}
                     name="search"
                     type="text" 
                     value={this.props.searchValue}
                     className="form-control" 
                     placeholder="Search..."
                    />
                </div>
            </div>
        )
    }
}

export default Search
