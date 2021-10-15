import React from "react";

const ItemDetail = ({precio, stock, nombre, descripcion, imagen}) => {
  return (
    <div>
      <div className="card" style={{ width: 18 + "rem" }}>
        <img src={imagen} className="card-img-top" alt={descripcion} />
        <div className="card-body">
          <h5 className="card-title">{nombre}</h5>
          <p className="card-text">{descripcion}</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">${precio}</li>
          <li className="list-group-item">Stock: {stock}</li>
        </ul>
      </div>
    </div>
  );
};

export default ItemDetail;
