import React from 'react'
import { useParams } from 'react-router'
import ItemDetailContainer from '../components/ItemDetailContainer/ItemDetailContainer'

const DetailPage = () => {

    let {idPro} = useParams();
    console.log(`Yo soy el id recibido ${idPro}`)

    return (
        <div>
            <ItemDetailContainer idPro={idPro}/>
        </div>
    )
}

export default DetailPage
