import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Header from './Header';
import Section from './Section';
import MediosPago from './MediosPago';


class App extends Component{
    constructor(props){
        super(props)
        this.state ={
            
            imagenes: [],
            comprar: '',
            buscar: '',
            
        }
        this.handleChange = this.handleChange.bind(this)

    }
    handleChange(e){
        this.setState({
            buscar: e.target.value
        })

    }

    componentDidMount(){
        this.setState({
            imagenes : [
    
                {urlImg: 'https://nadieescool.com/wp-content/uploads/2018/04/tapas-discos-de-vinilo-lps-lote-decoracin-7000-x-lote-D_NQ_NP_1498-MLA4754254234_082013-F.jpg',
                 titulo: 'Almendra',
                 artista: 'Sui generis',
                 precio: '$850',
                 comprar: ''
                },
                {urlImg: 'https://img.discogs.com/R0oMCzFikUFfgRR6nZwmWAZzJNs=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-13950479-1564984164-5932.jpeg.jpg',
                 titulo: 'La balada del diablo',
                 artista: 'La Renga',
                 precio: '$900',
                 comprar: ''

                },
                {urlImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB2BTTVCm7tGpigc0wX5R9Ij39foe50xZg7gA1UrtztFY5YtrNi_QyFBh1NaS1py1HBr3OGgZEsnZMpjOgJ3yS2sxEtnJdoGs&usqp=CAU&ec=45725305',
                 titulo: 'Ahi Vamos',
                 artista: 'Cerati',
                 precio: '$899',
                 comprar: ''


                },
                {urlImg: 'https://animalsrecords.com.ar/files/products/20161111205134_sumo-fiebre-los-chiquibum-d_nq_np_18022-mla20147857285_082014-f.jpg',
                 titulo: 'Fiebre',
                 artista: 'Sumo',
                 precio: '$980',
                 comprar: ''

 
                },
                {urlImg: 'https://nadieescool.com/wp-content/uploads/2018/04/tapas-discos-de-vinilo-lps-lote-decoracin-7000-x-lote-D_NQ_NP_1498-MLA4754254234_082013-F.jpg',
                 titulo: 'Almendra',
                 artista: 'Sui generis',
                 precio: '$850',
                 comprar: ''
                },
                {urlImg: 'https://img.discogs.com/R0oMCzFikUFfgRR6nZwmWAZzJNs=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-13950479-1564984164-5932.jpeg.jpg',
                 titulo: 'La balada del diablo',
                 artista: 'La Renga',
                 precio: '$900',
                 comprar: ''

                },
                {urlImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB2BTTVCm7tGpigc0wX5R9Ij39foe50xZg7gA1UrtztFY5YtrNi_QyFBh1NaS1py1HBr3OGgZEsnZMpjOgJ3yS2sxEtnJdoGs&usqp=CAU&ec=45725305',
                 titulo: 'Ahi Vamos',
                 artista: 'Cerati',
                 precio: '$899',
                 comprar: ''


                },
                {urlImg: 'https://animalsrecords.com.ar/files/products/20161111205134_sumo-fiebre-los-chiquibum-d_nq_np_18022-mla20147857285_082014-f.jpg',
                 titulo: 'Fiebre',
                 artista: 'Sumo',
                 precio: '$980',
                 comprar: ''

 
                },
                
            ]
        })
    }

       render(){
           return(
               <Router>
               <Header buscar={this.state.buscar} handleChange={this.handleChange} />

               <Switch>
                   
                   <Route path="/comprar">
                   <Link to={`./MediosPago`} className="btn btn-primary">Comprar</Link>
                   </Route>

                   <Route path="/mediospago">
                       <MediosPago />
                   </Route>

                   <Route path='/'>
                   <Section imagenes={this.state.imagenes} buscar={this.state.buscar} handleChange={this.handleChange}/>
                   </Route>
                   
               </Switch>
               </Router>
           )
       }
    
}

export default App;
