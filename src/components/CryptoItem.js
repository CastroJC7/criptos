import React from 'react';
import './estilo.css';
import './responsive.css'; 

const CryptoItem = ({ 
  nombre, 
  url_logo, 
  caracteristicas, 
  descripcion 
}) => {
  return (
    <div className="crypto-item">
      <div className="crypto-header">
        <h1 className="crypto-name">{nombre}</h1>
      </div>

      <div className="crypto-body">
      
        <div className="crypto-description">
          <h3>DESCRIPCION</h3>
          <p>{descripcion}</p>
        </div>

        <img 
          src={url_logo}
          alt={nombre}
          className="crypto-image" 
        />
      </div>
      <div className="espacio"></div>
  <div className="crypto-footer">
  <p>CARACTERISTICAS</p>
  {caracteristicas.map((caracteristica, index) => (
    <p key={index}>{caracteristica}</p>
    
  ))}
</div>

<hr className="crypto-divider" />

    </div>
  );
};

export default CryptoItem;
