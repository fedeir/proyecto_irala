import React, { useState } from 'react'

const ItemCount = ({stock, inicial}) => {
    
    const [contador, setContador]=useState(inicial)

    const addFn=()=>{
        if(contador < stock) setContador(contador+1);
    }
    const removeFn=()=>{
        if(contador >1) setContador(contador-1);
    }

    return (
        
        <div className="card " style={{width: 18 + 'rem'}}>
            
            <div className="card-body">
                <div className="d-flex justify-content-between align-items-baseline">
                    <button className="btn btn-primary btn-sm" onClick={()=>removeFn()}>-</button>
                    <p className="card-text ">{contador}</p>
                    <button className="btn btn-primary btn-sm" onClick={()=>addFn()}>+</button>
                </div>
            </div>
</div>
    )
}

export default ItemCount

