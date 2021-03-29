import React from "react";
import ReactDOM from "react-dom";
import Main from "./Main";
import "./index.css";
import "./App";
 
ReactDOM.render(
  <Main/>, 
  document.getElementById("root")
);

/* 
- Lo primero que se hizo fue crear el proyecto con el siguiente comando "npx create-react-app paginaweb" 
- Con el anterior comando se creara nuestro proyecto dentro de la carpeta paginaweb depues de eso nos ubicamos en la
  carpeta con el siguiente comando "cd paginaweb"
- Bueno ahora podemos probar que funcione con el siguiente comando "npm start"
- Instalamos react router para hacer eso ejecutamos el siguiente comando "npx create-react-app my-app"
  esto copia los archivos apropiado de react router y los registra en nuestro package.json para que nuestra app se consistente. 
  
  
- Hacemos llamada a ReactDOM.render y vemos que lo que esta renderizando es nuestro componente principal.
*/