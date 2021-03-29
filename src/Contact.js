import React, { Component } from "react";
 
class Contact extends Component {
  render() {
    return (
      <div>
        <h2>Tiene alguna duda?</h2>
        <p>Contactenos a:</p>
        <ol>
          <li>Celular: 942039090</li>
          <li>Correo: adeerly.prieto@tecsup.edu.pe</li>
          <li>Calle: Calle Kazumon02 en Salamanca</li>
        </ol>
      </div>
    );
  }
}
 
export default Contact;

/*
Si le echamos un vistazo a esto nos damos cuenta de lo que se esta agregando, veremos que los componentes devuelven
contenido estandar.
*/