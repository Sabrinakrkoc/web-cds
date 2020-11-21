import React, { Component } from 'react';
import Search from './search';

class Header extends Component{
    render(){
        return(
            <nav className="navbar navbar-light bg-light" id="barra">
              <h1 className="navbar-brand">DiscoStore{this.props.webname}</h1>
            <div id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
              <a className="nav-link" href="/">Home<span className="sr-only">(current)</span></a>
             </li>
            </ul>
            </div>
            <form className="form-inline">
              <Search buscar={this.props.buscar} handleChange={this.props.handleChange}/>
            </form>
          </nav>
        )
    }
}


export default Header;
