import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'

const CartWidget = () => {
    return (
        <div>
            <span> <FontAwesomeIcon icon={faCartPlus} size="lg" /></span>
        </div>
    )
}

export default CartWidget
