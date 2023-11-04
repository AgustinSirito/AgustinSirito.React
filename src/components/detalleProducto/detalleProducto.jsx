// import {useParams } from 'react-router-dom'
import Card from 'react-bootstrap/Card';
import { Avatar,} from 'antd'
import {ShoppingCartOutlined} from '@ant-design/icons';
import { Link } from "react-router-dom";

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
        "imagen": "../src/components/img/Haworthia.jpg"
        },
        {
        "id":2,
        "tipo":"helecho", 
        "nombre":"Helecho Nephrolepis exaltata", 
        "descripcion":"Helecho colgante", 
        "precio": 15.0,
        "stock":  4, 
        "size": "Mediano",
        "imagen": "../src/components/img/Nephrolepis.jpg"
        },
        {
        "id":3,
        "tipo":"Orquídea", 
        "nombre":"Orquídea Phalaenopsis", 
        "descripcion":"Orquídea de flores grandes", 
        "precio": 20.75,
        "stock":  4, 
        "size": "Grande",
        "imagen": "../src/components/img/phalaenopsis.jpg"
        },
        {
        "id":4,
        "tipo":"trepadora", 
        "nombre":"Poto Epipremnum aureum", 
        "descripcion":"Planta trepadora de hojas verdes", 
        "precio": 12.99,
        "stock":  2, 
        "size": "Mediano",
        "imagen": "../src/components/img/epipremnum.png"
        },
        {
        "id":5,
        "tipo":"cactus", 
        "nombre":"Cactus Echinocactus grusonii", 
        "descripcion":"Orquídea de flores grandes", 
        "precio": 20.75,
        "stock":  4, 
        "size": "Grande",
        "imagen": "../src/components/img/Echinocactus.jpeg"
        }
    ]

    // const params = useParams();
    let plantaid = 1
    // let plantaid = params.id
    let datosProducto = plantas.filter(planta=>{return(planta.id==plantaid)})[0]

    return(

        <Card style={{ width: '18rem' }}>             
            <Card.Img variant="top" src={datosProducto.imagen} />
            <Card.Body>
                <Card.Title>{datosProducto.nombre}</Card.Title>
                <Card.Text>{datosProducto.descripcion}</Card.Text>
                <p>Precio: <b>{datosProducto.precio} $ </b></p>
                <p>Cantidad: </p>
                <input value={datosProducto.cantidad} min="0" type="number"/>
                <div as={Link} to=""><Avatar shape="circle" size="medium" icon={<ShoppingCartOutlined />} /> </div>
            </Card.Body>
        </Card>
    )
}


export default DetalleProducto