import React from "react";

const Imagenes = ({ id, name, image, type, hab, peso, altura }) => {
  const style = `thumb-container ${type}`;
  return (
    <div className="thumb-container">
      <div className="number">
        <small>{id}</small>
      </div>

      <img src={image} alt={name} />
      <h3>{name}</h3>
      <div className="detail-wrapper">
        <small>Tipo: {type}</small>
        <p>Habilidad: {hab}</p>
      </div>
      <div className="detail-wrapper2">
        <small>Peso: {peso}</small>
        <p>Altura: {altura}</p>
      </div>
    </div>
  );
};

export default Imagenes;
