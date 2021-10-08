import React, { useState, useEffect } from 'react'
import Item from '../Item/Item';
import ItemCount from '../ItemCount/ItemCount'




const ItemListContainer = (props) => {

    const [prod, setProd] = useState([])

    const promesa=new Promise((resolve, reject) => {
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
        }, 2000);
    })


    const getItems=async()=>{
        try{
        const result = await promesa;
        setProd(result)
        }catch(error){alert("1234")}
        
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
