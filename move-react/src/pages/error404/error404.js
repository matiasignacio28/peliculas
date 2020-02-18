import React from "react";
import { Link } from 'react-router-dom';
import "./error404.scss";




  export default function Error404 () {

    return (
      <div className="error404">
        <h1>Error404</h1>
        <h2>pagina   no encontrada</h2>
        <Link to= "/">
          <h3>volver al inicio</h3>
        </Link>
      </div>
    );
    
    
  
  }