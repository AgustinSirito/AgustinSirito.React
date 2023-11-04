
import '../productCard/ProductCard.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";

const ProductCard = ({data}) => {
    return(
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={data.imagen} />            
            <Card.Body>
                <div as={Link} to={"/detail/1"}>
                    <Card.Title>{data.nombre}</Card.Title>
                </div>
                <Card.Text>{data.descripcion}</Card.Text>
                <p>Precio: <b>{data.precio} $ </b></p>
                <p>Cantidad: </p>
                <input value={data.cantidad} min="0" type="number"/>
                <div>
                    <Button variant="primary"  as={Link} to={"/detail/1"}>Mas info</Button>
                </div>               
            </Card.Body>
        </Card>
    )
}

export default ProductCard