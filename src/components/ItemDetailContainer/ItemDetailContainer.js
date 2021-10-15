import React, { useState, useEffect } from 'react'

import ItemDetail from '../ItemDetail/ItemDetail';
import {listaDeProductos} from '../Data/data.js'

const ItemDetailContainer = ({idPro}) => {
    
    var id=parseInt(idPro)
    
    console.log(typeof(id))
    console.log(typeof(idPro))
    const [productDetail, setProdDetail] = useState([])

    const [productoIndividual, setProducto] = useState(null);

    const promesa2=new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(listaDeProductos)
        },1000);
    })
    

    const getProductosDetalle= async() =>{
        try{
            const res = await promesa2;
            setProdDetail(res)
            console.log(productDetail)
        }catch(error){alert("12346")}
        
    }

    
    useEffect(() => {
        getProductosDetalle();
        setProducto(productDetail.find(element => element.id === id))
    }, [productDetail]);

    




    return (
        <div>
            
           {
        
        productoIndividual ? ( 
                <>
                        <h2 className="">Producto</h2>
                        <div className="d-flex flex-wrap justify-content-around align-items-baseline">
                    {
                    
                        
                        <ItemDetail
                        nombre={productoIndividual.nombre}
                        descripcion={productoIndividual.descripcion}
                        imagen={productoIndividual.imagenUrl}
                        precio={productoIndividual.precio}
                        stock={productoIndividual.stock}
                        
                        />
                    }
                    </div>
                </>
        ) : (
            <div className="spinner-border text-info" role="status">
                <span className="visually-hidden">Loading...</span>
          </div>
        ) 
      }
      
        
        </div>
    )
    
}

export default ItemDetailContainer
