import React from 'react'
import ItemCount from '../ItemCount/ItemCount'

const ItemListContainer = (props) => {
    return (
        <div>
            <h1>{props.greeting}</h1>
            <ItemCount stock={5} inicial={1} producto="producto"/>
        </div>
    )
}

export default ItemListContainer
