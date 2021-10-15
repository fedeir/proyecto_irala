//tarjeta de producto
import React from "react";
import { Link } from "react-router-dom";

const Item = ({id, precio, stock, nombre, descripcion, imagen}) => {
  return (
    
      <div className="card" style={{width: 18 + 'rem'}}>
            <img src={imagen} className="card-img-top" alt={descripcion} />
            <div className="card-body">
                <h5 className="card-title">{nombre}</h5>
               <Link to={`/productos/${id}`}>
                <button>Ver detalle{id}</button>
                </Link>
            </div>
        
      </div>
    
  );
};

export default Item;
