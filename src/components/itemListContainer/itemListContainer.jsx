import ProductCard from "../productCard/productCard"
import './itemListContainer.css'


const ItemList = ({listaProducto}) => {
    //react array loop
    return(
        <div class="cardContainer">
            {listaProducto.map(item=>(
                <ProductCard data={item} ></ProductCard>
            ))}
        </div>
    )
}

export default ItemList

// import Item from "./Item";
// import { Container, Row, Col } from "react-bootstrap";

// function Plantas({ products }) {
//     return (
//         <Container>
//             <Row>
//                 {products.map((product) => (
//                     <Col key={product.id} className="mt-5" xs={12} lg={4}>
//                         <Item {...product} />
//                     </Col>
//                 ))}
//             </Row>
//         </Container>
//     );
// }

// export default Plantas;