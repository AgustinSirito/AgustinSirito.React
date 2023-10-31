
import '../productCard/ProductCard.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const ProductCard = ({data}) => {
let link = 'plantas/' + data.id
    return(
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={data.imagen} />            
            <Card.Body>
                <a href={link}>
                    <Card.Title>{data.nombre}</Card.Title>
                </a>
                <Card.Text>{data.descripcion}</Card.Text>
                <p>Precio: <b>{data.precio} $ </b></p>
                <p>Cantidad: </p>
                <input value={data.cantidad} min="0" type="number"/>
                <div>
                    <Button variant="primary"  href={link}>Mas info</Button>
                </div>               
            </Card.Body>
        </Card>
    )
}

export default ProductCard