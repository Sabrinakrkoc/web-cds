import React, { Component } from 'react';
import {Link} from 'react-router-dom';


class Section extends Component{
    render(){
        
        const filtroImg = this.props.imagenes.filter((nombreCard)=>nombreCard.titulo.toLowerCase().indexOf(this.props.buscar.toLowerCase()) !== -1)
        
    return ( <div className="cuerpo">
        {filtroImg.map((img,index)=> <div className="card" key={index}>
        <img className="card-img-top" src={img.urlImg} alt=" "/>
         <div className="card-body">
             <h5 className="card-title">Título: {img.titulo}</h5>
             <p className="card-text">Artista: {img.artista}</p>
             <p className="card-text">Precio: {img.precio}</p>
             <Link to={`./MediosPago`} className="btn btn-primary">Comprar</Link>
         </div>
        </div>)}
    </div>
    );
    }
};



export default Section;
