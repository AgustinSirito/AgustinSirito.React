
import '../productCard/ProductCard.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";

const ProductCard = ({data}) => {
    return(
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={data.imagen} />            
            <Card.Body>
                <div >
                    <Card.Title>{data.nombre}</Card.Title>
                </div>
                <Card.Text>{data.descripcion}</Card.Text>
                <p>Precio: <b>{data.precio} $ </b></p>
                <p>Cantidad: </p>
                <input value={data.cantidad} min="0" type="number"/>
                <div>
                    <Button variant="primary"  as={Link} to={"/detail/"+data.id}>Mas info</Button>
                </div>               
            </Card.Body>
        </Card>
    )
}

export default ProductCard

// import { Button, Card, Image, ListGroup } from "react-bootstrap";
// import { Link } from "react-router-dom";

// function Item({ title, price, img, id }) {
//     return (
//         <Card className="shadow-sm">
//             <ListGroup className="list-group-flush">
//                 <ListGroup.Item className="text-center">
//                     <Image src={img} style={{ height: "175px" }} />
//                 </ListGroup.Item>
//             </ListGroup>

//             <Card.Body>
//                 <Card.Title
//                     className="fs-6"
//                     style={{ color: "#51585e", marginBottom: 0 }}
//                 >
//                     {title}
//                 </Card.Title>
//                 <div className="d-flex align-items-center justify-content-between">
//                     <strong>${price}</strong>
//                     <Button as={Link} to={`/detail/${id}`}>
//                         Ver mas
//                     </Button>
//                 </div>
//             </Card.Body>
//         </Card>
//     );
// }

// export default Item;
