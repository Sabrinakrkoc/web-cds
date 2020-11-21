import React, { Component } from 'react';

class Comprar extends Component{
    render(){
        return(

            <a href="/comprar" className="btn btn-primary" onClick={(event)=>{event.preventDefault()}}>Comprar{this.props.comprar}</a>

        )
    }
}

export default Comprar;
