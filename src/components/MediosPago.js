import React, { Component } from 'react';



class MediosPago extends Component{
    render(){
        return(<>
      <div className="boxpago">
            <div className="card-compra">
  <ul className="list-group list-group-flush">
    <li className="list-group-item">Efectivo</li>
    <li className="list-group-item">Tarjeta Débito</li>
    <li className="list-group-item">Tarjeta Crédito</li>
  </ul>
</div>
</div>
       </> )
    }
}

export default MediosPago;
