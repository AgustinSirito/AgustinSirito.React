// import {useParams } from 'react-router-dom'

const DetalleProducto = () => {
    let plantas = [
        {
        "id":1,
        "tipo":"suculenta", 
        "nombre":"Suculenta Haworthia", 
        "descripcion":"Pequeña planta suculenta", 
        "precio": 10.5,
        "stock":  5, 
        "size": "Pequeño",
        "imagen": "./img/Haworthia.jpg"
        },
        {
        "id":2,
        "tipo":"helecho", 
        "nombre":"Helecho Nephrolepis exaltata", 
        "descripcion":"Helecho colgante", 
        "precio": 15.0,
        "stock":  4, 
        "size": "Mediano",
        "imagen": "./img/Nephrolepis.jpg"
        }
    ]

    // const params = useParams();
    let plantaid = 1
    // let plantaid = params.id
    let datosProducto = plantas.filter(planta=>{return(planta.id==plantaid)})[0]


    return(

        <div className="card">             
            <div className="cardContainer">
                <h4><b>{datosProducto.nombre}</b></h4>
                <p><b>{datosProducto.descripcion}</b></p>
                <p>Precio: <b>{datosProducto.precio} $ </b></p>
                <p>Cantidad: </p>
                <input value={datosProducto.cantidad} min="0" type="number"/>
            </div>
        </div>
    )
}

export default DetalleProducto