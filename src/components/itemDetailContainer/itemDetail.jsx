import Card from 'react-bootstrap/Card';
import { Avatar,} from 'antd'
import {ShoppingCartOutlined} from '@ant-design/icons';
import { Link } from "react-router-dom";


const ItemDetail = ({datosProducto}) => {
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


export default ItemDetail