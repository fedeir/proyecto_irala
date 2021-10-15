import React, { useState, useEffect } from 'react'
import Item from '../Item/Item';
import ItemCount from '../ItemCount/ItemCount'
import {listaDeProductos} from '../Data/data.js'




const ItemListContainer = (props) => {

    const [prod, setProd] = useState([])

    const promesa=new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(listaDeProductos)
        }, 2000);
    })


    const getItems=async()=>{
        try{
        const result = await promesa;
        setProd(result)
        }catch(error){alert("No se obtuviron resultados")}
        
    }

    useEffect(() => {
        getItems();
    }, []);

    

    return (
        <div >
           {
        
        prod.length ? ( 
          <>
            <h2 className="">Productos</h2>
            <div className="d-flex flex-wrap justify-content-around align-items-baseline">
            {
              
              prod.map((prods) => {
                
                return (
                  <div key={prods.id} >
                      
                    <Item
                      nombre={prods.nombre}
                      descripcion={prods.descripcion}
                      imagen={prods.imagenUrl}
                      precio={prods.precio}
                      stock={prods.stock}
                      id={prods.id}
                    />
                    <ItemCount stock={prods.stock} inicial={1} />
                    
                  </div>
                );
              })
            }
            </div>
          </>
        ) : (
          <p>Cargando productos...</p>
        ) 
      }
        </div>
    )
}

export default ItemListContainer
