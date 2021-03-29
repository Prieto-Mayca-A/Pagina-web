import React, { Component } from "react";
import {
    Route,
    NavLink,
    HashRouter
  } from "react-router-dom";
  import Home from "./Home";
  import Modelos from "./Modelos";
  import Contact from "./Contact";
  import App from "./App";
 
  class Main extends Component {
    render() {
      return (
        <HashRouter>
          <div>
            <h1 style={{textAlign: "center"}}>BOCHITO S.A</h1>
            <ul className="header">
              <li><NavLink to="/">Inicio</NavLink></li>
              <li><NavLink to="/modelos">Modelos</NavLink></li>
              <li><NavLink to="/contact">Contactanos</NavLink></li>
              <li><NavLink to="/App">Log-out</NavLink></li>
            </ul>
            <div className="content">
              <Route path="/" component={Home}/>
              <Route path="/modelos" component={Modelos}/>
              <Route path="/contact" component={Contact}/>
              <Route path="/App" component={App}/>
            </div>
          </div>
        </HashRouter>
      );
    }
  }
 
export default Main;

/* 
Tenemos un componente llamado Main que nos devuelve algo de HTML

Tambien estamos importando Route , NavLink y HashRouter desde el paquete NPM de react dom.
Ademas tambien estamos importando Inicio , Cosas y Contacto , ya que los haremos referencia 
como parte de la carga de nuestro contenido.

Lo primero que vamos a hacer es definir nuestra región de enrutamiento, esto lo haremos dentro del método de 
renderizado de nuestro componente principal.
El componente HashRouter proporciona la base para la navegación y el manejo del historial del
navegador del que se compone el enrutamiento. Lo se hace a continuación es definir 
nuestros enlaces de navegación.
Para cada enlace, le damos la URL a la que le estamos diciendo a nuestro enrutador que navegue. 
El valor de URL  esta definido por to prop que actúa como un identificador para garantizar que se cargue el contenido correcto.
*/