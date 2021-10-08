//tarjeta de producto
import React from "react";
import ItemCount from "../ItemCount/ItemCount";

const Item = ({id, precio, stock, nombre, descripcion, imagen}) => {
  return (
    
      <div className="card" style={{width: 18 + 'rem'}}>
        <img src={imagen} className="card-img-top" alt={descripcion} />
        <div className="card-body">
			<h5 className="card-title">{nombre}</h5>
			<p className="card-text">
				{descripcion}
			</p>
        </div>
        <ul className="list-group list-group-flush">
			<li className="list-group-item">${precio}</li>
			<li className="list-group-item">Stock: {stock}</li>
        </ul>
        
      </div>
    
  );
};

export default Item;
