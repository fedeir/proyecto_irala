import React, { useState, useEffect } from 'react'

import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = ({idProd}) => {
    
    const [productDetail, setProdDetail] = useState([])

    const [productoIndividual, setProducto] = useState(null);

    const promesa2=new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(
                [{
                    id: 1,
                    nombre: 'Jorgito',
                    categoria:'Alfajor',
                    descripcion: 'Blanco, Relleno dulce de leche',
                    precio: 80,
                    imagenUrl:
                    'https://ar.openfoodfacts.org/images/products/77905758/front_es.14.400.jpg',
                    stock: 19,
                    
                },

                {
                    id: 2,
                    nombre: 'Guaymallen',
                    categoria:'Alfajor',
                    descripcion: 'Negro, Relleno dulce de leche',
                    precio: 50,
                    imagenUrl:
                    'https://static.wixstatic.com/media/29f523_31c4b301eef44450a2bb552944c3cc65~mv2.png/v1/fill/w_287,h_208,al_c,q_85,usm_0.66_1.00_0.01/29f523_31c4b301eef44450a2bb552944c3cc65~mv2.webp',
                    stock: 8,
                },
                {
                    id: 3,
                    nombre: 'Terrabusi',
                    categoria:'Alfajor',
                    descripcion: 'Bañado chocolate',
                    precio: 90,
                    imagenUrl:
                    'http://d3ugyf2ht6aenh.cloudfront.net/stores/375/276/products/d_951240-mla41432705989_042020-o-25479486d804a6db1a15990590421538-640-0.jpg',
                    stock: 11,
                }
            ]
            )
        },2000);
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
        setProducto(productDetail.find(element => element.id === idProd))
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
                        id={productoIndividual.id}
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
