import React, { useState } from 'react'

const ItemCount = ({stock, inicial, producto}) => {
    
    const [contador, setContador]=useState(inicial)

    const addFn=()=>{
        if(contador < stock) setContador(contador+1);
    }
    const removeFn=()=>{
        if(contador >1) setContador(contador-1);
    }

    return (
        // <div className="container border col-4">
        //     <button className="btn btn-primary" onClick={()=>addFn()}>+</button>
        //     <p>{contador}</p>
        //     <button className="btn btn-primary" onClick={()=>removeFn()}>-</button>
            
        // </div>
        <div className="card " style={{width: 12 + 'em'}}>
            <div className="card-header">
                <h5>{producto}</h5>
            </div>
            <div className="card-body">
                <div className="d-flex justify-content-between align-items-baseline">
                    <button className="btn btn-primary btn-sm" onClick={()=>addFn()}>+</button>
                    <p className="card-text ">{contador}</p>
                    <button className="btn btn-primary btn-sm" onClick={()=>removeFn()}>-</button>
                </div>
            </div>
</div>
    )
}

export default ItemCount

