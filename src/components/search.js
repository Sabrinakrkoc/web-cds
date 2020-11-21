import React, { Component } from 'react';


class Search extends Component{
    render(){
        return(
            <input className="form-control mr-sm-2" value={this.props.buscar} onChange={this.props.handleChange} type="search" placeholder="Buscar" aria-label="Search"/>

        )
    }
}

export default Search;
